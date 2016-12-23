/**
 * Created by mat on 2016-12-23.
 * Based on https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/Tabs/sendMessage
 * Rewritten to use ECMA 5.1 and to be compatible with all browsers
 */
"use strict";

// FF: browser, Chrome: chrome
var browser = browser || chrome;

console.log("in background script");

function sendMessageToActiveTab(tab) {
    browser.tabs.sendMessage(
        tab.id,
        {body: "Hi from background script, message to tab id: " + tab.id},
        function (response) {
            console.log(response);
        });
}

browser.browserAction.onClicked.addListener(function (tab) {
    sendMessageToActiveTab(tab);
});