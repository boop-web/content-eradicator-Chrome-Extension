function refreshWebsiteList() {
  chrome.storage.local.get({websites: []}, (data) => {
    const list = document.getElementById('websiteList');
    list.innerHTML = '';
    data.websites.forEach((site) => {
      const li = document.createElement('li');
      li.textContent = site;
      list.appendChild(li);
    });
  });
}

function applyTranslations(lang) {
  fetch(chrome.runtime.getURL("translations.json"))
    .then(res => res.json())
    .then(translations => {
      const t = translations[lang];
      document.getElementById('title').innerText = t.title;
      document.getElementById('blocked_websites').innerText = t.blocked_websites;
      document.getElementById('websiteInput').placeholder = t.website_placeholder;
      document.getElementById('addWebsite').innerText = t.add_website;
      document.getElementById('export_import').innerText = t.export_import;
      document.getElementById('exportBtn').innerText = t.export;
      document.getElementById('importBox').placeholder = t.import_placeholder;
      document.getElementById('importBtn').innerText = t.import;
      document.getElementById('toggleTheme').innerText = t.toggle_theme;
      document.getElementById('saveLang').innerText = t.save_language;
      document.getElementById('language_select').innerText = t.language_select;
    });
}

document.getElementById('addWebsite').addEventListener('click', () => {
  const site = document.getElementById('websiteInput').value.trim();
  if (!site) return;
  chrome.storage.local.get({websites: []}, (data) => {
    const websites = data.websites;
    websites.push(site);
    chrome.storage.local.set({websites}, () => {
      document.getElementById('websiteInput').value = '';
      refreshWebsiteList();
    });
  });
});

document.getElementById('exportBtn').addEventListener('click', () => {
  chrome.storage.local.get(['keywords', 'websites'], (data) => {
    const exportData = JSON.stringify(data, null, 2);
    navigator.clipboard.writeText(exportData).then(() => {
      alert('Exported to clipboard!');
    });
  });
});

document.getElementById('importBtn').addEventListener('click', () => {
  try {
    const data = JSON.parse(document.getElementById('importBox').value);
    chrome.storage.local.set(data, () => alert('Imported successfully!'));
  } catch (e) {
    alert('Invalid JSON format.');
  }
});

document.getElementById('toggleTheme').addEventListener('click', () => {
  const body = document.getElementById("settingsBody");
  const isDark = body.classList.contains("dark-mode");
  const newTheme = isDark ? "light" : "dark";
  chrome.storage.local.set({theme: newTheme}, () => {
    body.className = newTheme + "-mode";
  });
});

document.getElementById('saveLang').addEventListener('click', () => {
  const lang = document.getElementById('languageMenu').value;
  chrome.storage.local.set({ language: lang }, () => {
    applyTranslations(lang);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  refreshWebsiteList();
  chrome.storage.local.get({theme: "light", language: "en"}, (data) => {
    document.getElementById("settingsBody").className = data.theme + "-mode";
    document.getElementById('languageMenu').value = data.language;
    applyTranslations(data.language);
  });
});