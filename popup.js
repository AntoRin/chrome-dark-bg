let extBtns = document.querySelectorAll(".init");

extBtns.forEach(btn => {
  btn.onclick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, tab => {
      chrome.tabs.sendMessage(tab[0].id, btn.id);
    });
  };
});
