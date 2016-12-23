/**
 * Created by mat on 2016-12-23.
 */
// content-script.js
"use strict";

browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("Message from the background script:");
    console.log(message.body);
    sendResponse({body: alert(request.body)});
});
