<p align="center">
  <img src="https://github.com/Connor56/bare-bones-collector/assets/34070858/4538e1cd-7dc4-447b-af56-a3bc50d47165"/>
</p>


# Bare-Bones

The bare-bones data collection Chrome extension setup. A simple interface for collecting, storing, and downloading html elements from any page.

# Features

- Popup action from the app tray.
- Input text box in the popup action to write a CSS selector in.
- Submit button that sends the CSS selector to a content script to gather elements of that type.
- Save button that allows you to download all the elements stored in your local storage.
- Background service worker for transmitting messages, and starting the download using the `chrome.downloads` API.
- Content script for collecting the elements, saving them, and setting up the download.
- Manifest that supports the above features.

# Tutorial

If you're interested in seeing how this extension was built, you can follow my [tutorial on medium]().

### Preview:
<p align="center">
<a href="https://medium.com/@dr.connor/how-to-build-a-basic-chrome-extension-8e6b054caca6">
  <img src="">
</a>
</p>
