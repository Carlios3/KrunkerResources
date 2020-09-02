// ==UserScript==
// @name         krunker third pearson.lol
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  krunker third pearson
// @author       Jakobe
// @match        *://krunker.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    Object.defineProperty(
    Object.prototype,
    "thirdPerson",
    { enumerable: false,
     get() {
         return true
     },
});
})();
