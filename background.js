chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("hi");
  if (message.action === "collectElements") {
    (async () => {
      const [tab] = await chrome.tabs.query({
        active: true,
        lastFocusedWindow: true,
      });
      console.log(message.query);
      await chrome.tabs.sendMessage(tab.id, {
        action: "collectElements",
        query: message.query,
      });
    })();
  } else if (message.action === "saveElements") {
    (async () => {
      const [tab] = await chrome.tabs.query({
        active: true,
        lastFocusedWindow: true,
      });
      await chrome.tabs.sendMessage(tab.id, {
        action: "saveElements",
      });
    })();
  } else if (message.action === "downloadBlob") {
    // Use the chrome.downloads API to download the Blob URL
    chrome.downloads
      .download({
        url: message.blobURL,
        saveAs: true,
      })
      .then(() => {
        chrome.tabs.sendMessage(sender.tab.id, {
          action: "revokeBlob",
          blobURL: message.blobURL,
        });
      });
  }
});
