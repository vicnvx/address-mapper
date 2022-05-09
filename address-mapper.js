// body.innerText
function mapAdresses() {
    let pageText = document.getElementsByTagName('body')[0].innerText;
    let addresses = extractAddresses(pageText);
    for (let address of addresses) {
        address = prepareURL(address);
        open(address);
    }
}
/*
function recurseElements(myElements) {
    for (let e of myElements) {
        console.log(e);
        let s = extractAddress(e.innerText);
        s = extractAddress(s);
        s = prepareURL(s);
        open(s);
    }
    mapAdresses(myElements.children);
}
*/



// extract address string from innerText
function extractAddresses(s) {
    const addressRe = /\d+\s[a-zA-Z]\.\s.{0,25},\s.{0,12}/g;
    s = s.match(addressRe);
    return s;
}

// convert to URL
function prepareURL(s) {
    s = s.replaceAll(",", "%2c");
    s = s.replaceAll(" ", "+");
    const prefix = "https://www.google.com/maps/search/?api=1&query=";
    s = prefix.concat(s);
    return s;
}

// open new tab
function openTab(s) {
    browser.tabs.create(
        {
            active: false,
            url: s 
        }
    );
}




