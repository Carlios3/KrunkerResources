// ==UserScript==
// @name        menu btn
// @namespace   Violentmonkey Scripts
// @match       *://krunker.io/*
// @grant       none
// @version     1.0
// @author      IDK
// @description for chaning game logo image
// ==/UserScript==

// GET MENU ELEMENT
let menu = document.querySelector("#menuItemContainer")


// GETTING LOGO ELEMENT
let logo = document.querySelector("#mainLogo")

// TO ADD BUTTON TO MENY
function button(name, icon, fn){
  var menuItem = document.createElement("div"),
      menuItemIcon = document.createElement("div"),
      menuItemTitle = document.createElement("div");
  
  menuItem.className = "menuItem"
  menuItemIcon.className = "menuItemIcon"
  menuItemTitle.className = "menuItemTitle"
  
  menuItemTitle.innerHTML = name
  menuItemIcon.style.backgroundImage = `url(${icon})`
  
  menuItem.append(menuItemIcon, menuItemTitle)
  menu.append(menuItem)
  
  menuItem.addEventListener("click", fn)
}

// SCRIPT
let icon = "https://cdn.discordapp.com/attachments/749833376042713149/750004991330222140/unknown.png";
let name = "logo";
let fn = function(){
  let image = prompt("Logo url")
  logo.src = image
}
button(name, icon, fn)
