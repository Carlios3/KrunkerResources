// ==UserScript==
// @name         Krunker earthquake
// @author       chomler
// @match        *://krunker.io/*
// @grant        none
// ==/UserScript==

["sin","cos","tan"].map(_=>((_,__)=>{let ___=_[__];_[__]=_=>___(_)+(Math.random()*2-1)/300})(Math, _));
