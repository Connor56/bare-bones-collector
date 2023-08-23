document.querySelector("#submit_button").addEventListener("click", () => {
  var input = document.querySelector("#text_input");
  input = input.value;
  chrome.runtime.sendMessage({ action: "collectElements", query: input });
});

document.querySelector("#save_button").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "saveElements" });
});
