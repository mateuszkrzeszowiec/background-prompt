/**
 * Created by mat on 2016-12-23.
 */
// content-script.js
"use strict";

// FF: browser, Chrome: chrome
var browser = browser || chrome;

console.log("in content script");

browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    sendResponse({body: prompt(request.url, request.url)});
});
