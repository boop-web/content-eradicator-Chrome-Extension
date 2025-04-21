# Content Eradicator Extension

**Content Eradicator** is a Chrome extension originally inspired by a post from [Besart Kuleta](https://bit.ly/content-eradicator), where he created a small tool to hide annoying news content based on keywords like "Big Brother." Someone in the comments asked for an open-source version, so I decided to continue his great idea.

This enhanced version includes:
- Full open-source code
- Multilingual support (EN, DE, FR)
- A customizable settings panel
- Domain-level content blocking
- Light/Dark theme switching

I made this for personal productivity, but it's now available for anyone who finds it useful.
---

## Features

- Remove elements (`div`, `span`, `p`) containing specific keywords
- Block entire websites by domain
- Dark Mode / Light Mode toggle
- Import/Export keywords and website lists
- Multilingual UI: English, German, French
- Easy to edit and extend
- No tracking or ads – 100% local

---

## Folder Structure

```Structure
content-eradicator-extension/
├── background.js
├── icon.png (any image 128x128)
├── manifest.json
├── popup.html
├── popup.js
├── settings.html
├── settings.js
└── translations.json
```

---

## Installation (Local)

1. Download or clone this repo
2. Open `chrome://extensions/` in Chrome
3. Enable **Developer Mode**
4. Click **"Load unpacked"**
5. Select the folder

---

## Usage

1. Click the extension icon in your Chrome toolbar.
2. Add keywords to hide content containing them.
3. Click **"Settings"** to:
   - Add websites to block
   - Export/import keyword and domain lists
   - Change the language of the interface
   - Toggle light/dark mode

---

## Add More Languages

To support more languages:
1. Open `translations.json`
2. Add a new language key (e.g., `"es"` for Spanish)
3. Add the translated strings for all UI text
4. Add the new language to the dropdown in `settings.html`

---

## Customization

You can modify or extend this project to:
- Add more HTML tag filters
- Connect to external blocklists
- Use context menus or shortcut keys
- Auto-clear cookies or other advanced behavior

---

## License

This project is free and open-source under the [MIT License](LICENSE).

---

## Author

Made with care by [Diar Kryeziu](https://diarkryeziu.com)
