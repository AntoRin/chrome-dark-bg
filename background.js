chrome.runtime.onMessage.addListener((msg, sender, reply) => {
  reply("Process initialized", { return: true });
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    console.log(tabs);
    chrome.tabs.sendMessage(tabs[0].id, msg.type);
  });
});
