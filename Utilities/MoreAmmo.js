// ==UserScript==
// @name        unlimtied ammo
// @description client side only
// @match       *://krunker.io/*
// @author      b00f
// ==/UserScript==

 Object.defineProperty(
    Object.prototype,
    "unlimitedAmmo",
    { enumerable: false,
     get() {
         return true
     },
});
