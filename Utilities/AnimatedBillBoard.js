// ==UserScript==
// @name         Animated billboards
// @author       chomler
// @match        *://krunker.io/*
// @grant        none
// ==/UserScript==

Object.defineProperty(Object.prototype, "shaderId", {enumerable: false, get(){if(this.src && this.src.startsWith("pubs/")) return 1; else return this.rshaderId}, set(v){this.rshaderId = v}});
