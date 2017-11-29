console.log("Background is running");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
    let msg = {
      value : true
    }
    chrome.tabs.sendMessage(tab.id, msg);
}
