console.log("My extension content.js loaded");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResopnse) {
  console.log("Ok working");
  if(message.value) {
    let paragraphs = document.getElementsByTagName('*');
    for(e of paragraphs) {
      e.style['background-color'] = '#000000';
      e.style['color'] = '#00E600'
    }
  }
}
