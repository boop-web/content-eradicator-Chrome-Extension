document.getElementById('addKeyword').addEventListener('click', () => {
  const keyword = document.getElementById('keywordInput').value.trim();
  if (!keyword) return;
  chrome.storage.local.get({ keywords: [] }, (data) => {
    const keywords = data.keywords;
    keywords.push(keyword);
    chrome.storage.local.set({ keywords }, () => {
      displayKeywords();
      document.getElementById('keywordInput').value = '';
    });
  });
});

function displayKeywords() {
  chrome.storage.local.get({ keywords: [] }, (data) => {
    const list = document.getElementById('keywordList');
    list.innerHTML = '';
    data.keywords.forEach((kw) => {
      const li = document.createElement('li');
      li.textContent = kw;
      list.appendChild(li);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  displayKeywords();
  chrome.storage.local.get({ theme: "light" }, (data) => {
    document.getElementById("popupBody").className = data.theme + "-mode";
  });
});

document.getElementById('openSettings').addEventListener('click', () => {
  chrome.runtime.openOptionsPage();
});

document.getElementById('toggleTheme').addEventListener('click', () => {
  const body = document.getElementById("popupBody");
  const isDark = body.classList.contains("dark-mode");
  const newTheme = isDark ? "light" : "dark";
  chrome.storage.local.set({ theme: newTheme }, () => {
    body.className = newTheme + "-mode";
  });
});