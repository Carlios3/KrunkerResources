// ==UserScript==
// @name         Custom text on billoards
// @author       me
// @match        *://krunker.io/*
// @grant        none
// ==/UserScript==
Object.defineProperty(
    Object.prototype,
    "billboard",
    { enumerable: false,
     get() {
         return {txt:"GamingGurus",txtCol:"#FFF",bgCol:"#000000"}
     },
});
