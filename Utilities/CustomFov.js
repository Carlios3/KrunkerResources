// ==UserScript==
// @name         Krunker custom FOV
// @author       chomler
// @match        *://krunker.io/*
// @grant        none
// ==/UserScript==

let fov = 150
Math.tan =_=> fov * (Math.PI/180)
