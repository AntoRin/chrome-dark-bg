function modifyDOM(bgColor, txtColor, linkColor) {
  document.body.style.background = bgColor;
  document.body.style.color = txtColor;

  let allElements = document.querySelectorAll("*");
  allElements.forEach(element => {
    element.style.background = bgColor;
    element.style.color = txtColor;
  });

  let allLinks = document.querySelectorAll("a");
  allLinks.forEach(link => {
    link.style.textDecoration = "none";
    link.style.color = linkColor;
  });
}

chrome.runtime.onMessage.addListener((msg, sender, reply) => {
  switch (msg) {
    case "btnHigh":
      modifyDOM("black", "white", "coral");
      break;
    case "btnMed":
      modifyDOM("darkgray", "white", "coral");
      break;
    case "btnLow":
      modifyDOM("lightGray", "black", "coral");
  }
});
