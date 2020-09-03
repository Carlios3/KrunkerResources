// ==UserScript==
// @name        Krunker logo changer
// @namespace   Krunker logo changer
// @match       *://krunker.io/*
// @grant       none
// @version     1.0
// @author      Divide
// @description for chaning game logo image
// ==/UserScript==

window.addEventListener('load', ()=>{ setTimeout(()=>{
	if(localStorage.getItem('mls'))document.querySelector('#mainLogo').setAttribute('src', localStorage.getItem('mls'));
	var h = ()=>{
		var ele = document.querySelector('#menuWindow>#settHolder'),
			ic = ele.appendChild(document.createElement('div')),
			input = document.createElement('input');

		ic.innerHTML = 'Logo URL'

		ic.appendChild(input);
		ic.setAttribute('class', 'settName');
		ic.setAttribute('title', '');

		input.type = 'url'
		input.name = 'url'
		input.className = 'inputGrey2'
		input.id = 'slid_customDeaths'
		input.placeholder = input.value = 'https://krunker.io/img/logo_4.png'
		
		input.addEventListener('input', ()=>{
			localStorage.setItem('mls', input.value);
			document.querySelector('#mainLogo').setAttribute('src', input.value);
		});
	};
	document.querySelector('.menuItemIcon.iconSettings').parentNode.addEventListener('click', h);
	window.windows[0].changeTab = new Proxy(window.windows[0].changeTab, {
		apply(target, thisArg, argArray){
			target.apply(thisArg, argArray);

			h();
		}
	});
}, 1000)});
