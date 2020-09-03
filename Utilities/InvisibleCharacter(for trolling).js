// ==UserScript==
// @name         Krunker "chams"
// @author       jakobe, modified version of chomlers
// @match        *://krunker.io/*
// @grant        none
// ==/UserScript==

Object.defineProperty(Object.prototype,"children",{enumerable:!1,get(){return!this._ec&&this?.name?.startsWith("playermap")&&(this._ec=!0)&&(this.visible=!1)&&this.traverse(e=>{e&&"Mesh"===e.type&&(e.material.depthTest=!1,e.material.transparent=!0,e.material.fog=!1,e.material.emissive={r:1})}),this._ec=!1,this._ch},set(e){this._ch=e}});
