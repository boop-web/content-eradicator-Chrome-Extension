<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; padding: 10px; transition: background 0.3s, color 0.3s; }
    input, button { margin: 5px 0; width: 100%; }
    .dark-mode { background: #1e1e1e; color: white; }
    .light-mode { background: white; color: black; }
  </style>
</head>
<body id="popupBody">
  <h3>Content Eradicator</h3>
  <input type="text" id="keywordInput" placeholder="Enter keyword">
  <button id="addKeyword">Add Keyword</button>
  <ul id="keywordList"></ul>
  <hr>
  <button id="openSettings">Open Settings</button>
  <button id="toggleTheme">Toggle Theme</button>
  <script src="popup.js"></script>
</body>
</html>