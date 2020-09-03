// ==UserScript==
// @name         Dev Mode
// @description  gives you in game developer menu when you open player list (alt) and also you get extra buttons while browsing krunker hub
// @author       b00f
// @match       *://krunker.io/*
// ==/UserScript==

//client side only

Object.defineProperty(
    Object.prototype,
    "developer",
    {enumerable: false,
     get(){
         return true;
     }
    }
);
