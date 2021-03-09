let extBtns = document.querySelectorAll(".init");

extBtns.forEach(btn => {
  btn.onclick = () => {
    chrome.runtime.sendMessage(
      { status: "Initialize", type: btn.id },
      response => {
        console.log(response);
      }
    );
  };
});
