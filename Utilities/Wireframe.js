/ ==UserScript==
// @name         wireframe
// @match        *://krunker.io/*
// @description  built off chomlers cham script
// ==/UserScript==

// 99% of the credit goes to chomler i just added wirefram true
Object.defineProperty(Object.prototype, "children", {
    enumerable: false,
    get() {
        return !this._ec && this?.name?.startsWith("playermap") && (this._ec = true) && (this.visible = true) && this.traverse(e=>{
            e && "Mesh" === e.type && (
            e.material.wireframe = true
            )
        }
        ),
        this._ec = false,
        this._ch
    },
    set(e) {
        this._ch = e
    }
});
