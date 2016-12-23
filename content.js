/**
 * Created by mat on 2016-12-23.
 */
// content-script.js
"use strict";

console.log("in content script");

browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("Message from the background script:");
    console.log(request.body);
    sendResponse({body: prompt(request.body, 'default response from content script')});
});
