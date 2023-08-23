chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "collectElements") {
    // Get all of the elements matching the CSS query
    var elements = document.querySelectorAll(request.query);

    // Alert how many were found
    alert(`Found ${elements.length} elements`);

    // Create a JSON object from them using reduce
    const values = Array.from(elements).reduce(
      (json_object, element, index) => {
        json_object[`element_${index}`] = element.outerHTML;
        return json_object;
      },
      {}
    );

    // Save the elements in Chrome's local storage
    chrome.storage.local.set(values);
  } else if (request.action === "saveElements") {
    // Get all the values currently saved in local storage and turn
    // them into a Blob
    const values = chrome.storage.local.get().then((values) => {
      var valueString = JSON.stringify(values);
      console.log(valueString);
      const valueBlob = new Blob([valueString], { type: "application/json" });

      // Create an URL for the Blob
      let blobURL = URL.createObjectURL(valueBlob);

      // Send a message to the background script to download the URL
      chrome.runtime.sendMessage({ action: "downloadBlob", blobURL: blobURL });
    });
  } else if (request.action === "revokeBlob") {
    URL.revokeObjectURL(request.blobURL);
  }
});
