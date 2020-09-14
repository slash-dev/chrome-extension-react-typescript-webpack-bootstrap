import { getSomeAction } from "../content_script/Actions";

chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({}),
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ]);
  });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("New message: ", request, sender);
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs.length !== 1) {
      alert(" more that one active current window tab?");
      alert(`${request} more that one active current window tab? ${tabs}`);
      return;
    }
    if (request.action.id == "some_action_id") {
      const actions = [getSomeAction()];
      chrome.tabs.executeScript(
        tabs[0].id!, { code: 'var actions = ' + JSON.stringify(actions) + ';' },
        () => chrome.tabs.executeScript(tabs[0].id!, { file: 'ContentScriptDepsInjector.js' }));
    }
  });
  sendResponse();
});