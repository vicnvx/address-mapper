// set up listener
browser.browserAction.onClicked.addListener(handleClick);

// when browserAction clicked, call content script
function handleClick() {
    browser.tabs.executeScript({
        code: `mapAdresses();`
    })
}