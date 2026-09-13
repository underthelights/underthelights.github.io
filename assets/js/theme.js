(function () {
  'use strict';

  var storageKey = 'color-theme';
  var root = document.documentElement;
  var media = window.matchMedia('(prefers-color-scheme: dark)');

  function getStoredTheme() {
    try {
      var value = localStorage.getItem(storageKey);
      return value === 'light' || value === 'dark' ? value : null;
    } catch (error) {
      return null;
    }
  }

  function updateControls(theme) {
    var nextTheme = theme === 'dark' ? 'light' : 'dark';
    var label = 'Switch to ' + nextTheme + ' mode';

    document.querySelectorAll('[data-theme-toggle]').forEach(function (button) {
      button.setAttribute('aria-label', label);
      button.setAttribute('title', label);
      button.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
      var text = button.querySelector('[data-theme-label]');
      if (text) text.textContent = label;
    });
  }

  function applyTheme(theme, persist) {
    root.dataset.theme = theme;
    root.style.colorScheme = theme;

    var themeColor = document.getElementById('theme-color');
    if (themeColor) themeColor.content = theme === 'dark' ? '#111418' : '#ffffff';

    if (persist) {
      try {
        localStorage.setItem(storageKey, theme);
      } catch (error) {
        // The theme still applies when storage is unavailable.
      }
    }

    updateControls(theme);
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-theme-toggle]').forEach(function (button) {
      button.addEventListener('click', function () {
        applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true);
      });
    });

    applyTheme(root.dataset.theme === 'dark' ? 'dark' : 'light', false);
    window.requestAnimationFrame(function () {
      root.classList.add('theme-ready');
    });
  });

  function followSystemTheme(event) {
    if (!getStoredTheme()) applyTheme(event.matches ? 'dark' : 'light', false);
  }

  if (typeof media.addEventListener === 'function') {
    media.addEventListener('change', followSystemTheme);
  } else if (typeof media.addListener === 'function') {
    media.addListener(followSystemTheme);
  }

  window.addEventListener('storage', function (event) {
    if (event.key !== storageKey) return;
    var storedTheme = getStoredTheme();
    applyTheme(storedTheme || (media.matches ? 'dark' : 'light'), false);
  });
}());
