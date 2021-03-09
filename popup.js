let extBtns = document.querySelectorAll(".init");

extBtns.forEach(btn => {
  btn.onclick = () => {
    console.log("from popup");
    chrome.tabs.query({ active: true, currentWindow: true }, tab => {
      console.log(tab[0]);
      chrome.tabs.sendMessage(tab[0].id, btn.id);
    });
  };
});
