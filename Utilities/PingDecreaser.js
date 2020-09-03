// ==UserScript==
// @name         PingDecreaser
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://discord.com/channels/719793661914644581/729958787905224714
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

  Object.defineProperty(
    Object.prototype,
    "getStateConst",
    { enumerable: false,
     get() {
         return 999;
     },
});
})();
