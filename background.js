/**
 * Created by mat on 2016-12-23.
 * Based on https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/Tabs/sendMessage
 * Rewritten to use ECMA 5.1 and to be compatible with all browsers
 */
"use strict";

function sendMessageToActiveTab(tabs) {
    var tab = tabs[0];
    if (tab) { // Sanity check
        browser.tabs.sendMessage(
            tab.id,
            {body: "Hi from background script, message to tab id: " + tab.id}, function (response) {
                console.log(response);
            });
    }
}

browser.browserAction.onClicked.addListener(function () {
    browser.tabs.query({currentWindow: true, active: true}, sendMessageToActiveTab);
});