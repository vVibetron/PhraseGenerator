let panelWindowId = null;

chrome.action.onClicked.addListener(() => {
  const windowOptions = {
    url: "popup.html",
    type: "popup",
    width: 440,
    height: 620
  };

  if (panelWindowId !== null) {
    chrome.windows.get(panelWindowId, {}, (existingWindow) => {
      if (chrome.runtime.lastError) {
        // Window doesn't exist, create it
        chrome.windows.create(windowOptions, handleWindowCreation);
      } else {
        // Window exists, focus it
        chrome.windows.update(panelWindowId, { focused: true });
      }
    });
  } else {
    chrome.windows.create(windowOptions, handleWindowCreation);
  }
});

function handleWindowCreation(window) {
  panelWindowId = window.id;
  
  // Add listener to nullify ID when this specific window is closed
  const listener = (windowId) => {
    if (windowId === panelWindowId) {
      panelWindowId = null;
      chrome.windows.onRemoved.removeListener(listener);
    }
  };
  chrome.windows.onRemoved.addListener(listener);
}