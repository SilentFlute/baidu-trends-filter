chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const isBaidu = /baidu.com\/s/.test(tab.url);
  if(!isBaidu) return;
  chrome.scripting.executeScript({
    target: { tabId },
    func: () => {
      document.querySelector('#content_right').setAttribute('style', 'display:none;');
    }
  });
});