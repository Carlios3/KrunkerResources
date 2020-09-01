// ==UserScript==
// @name        Custom player config
// @namespace   Violentmonkey Scripts
// @match       *://krunker.io/*
// @grant       none
// @author      IDK
// ==/UserScript==

window.config = {
  nameOffset: 0.6,
  nameOffsetHat: 0.8,
  maxNameLength: 14,
  maxPassLength: 16,
  minPassLength: 6,
  HxD4: 11,
  chestWidth: 2.6,
  chestScale: 1.3,
  armScale: 1.2,
  legScale: 1.3,
  uArmLength: 2.7,
  armInset: -0.1,
  lArmLength: 2.7,
  headScale: 2,
  armOff: -0.8,
  legHeight: 4.2,
  NCuR5: 2.45,
  hitBoxPad: 1,
  tracerMinDst: 20,
  tracerMaxDst: 500,
  tracerChance: 1,
  crouchLean: -0.3141592653589793,
  crouchDst: 3,
  crouchSlow: 0.3,
  crouchSpeed: 0.007,
  crouchJump: 0.25,
  crouchSpread: 0.55,
  crouchAnim: 0.0008,
  crouchAnimMlt: 0.5,
  spreadMove: 25,
  spreadFall: 30,
  spreadRecover: 0.985,
  spreadAdj: 0.00063,
  spreadMlt: 240,
  ZE4: 0.3,
  flagMsg: "You have the Flag",
  flagMsgE: "Enemy has your Flag",
  flagMsgRC: "Enemy has your Flag",
  flagZoneS: 24,
  flagZoneH: 36,
  flagScale: 12,
  flagOff: 6,
  flagHOff: 15,
  flagUpdate: 2500,
  interactTimer: 100,
  pickupZoneX: 12,
  pickupZoneZ: 4,
  pickupZoneH: 2,
  pickupScale: 6,
  pickupOff: 1,
  maxLevel: 102,
  maxELOLevel: 8,
  assistTime: 5000,
  assistScore: 25,
  assistMin: 20,
  scoreStreak: 2000,
  medalAnim: 1000,
  medalDelay: 900,
  feedTimer: 2000,
  spinTimer: 1800,
};
Object.keys(config).forEach((r) =>
  Object.defineProperty(Object.prototype, r, {
    enumerable: false,
    get() {
      return config[r];
    },
    set(v) {
      this[`_${r}`] = v;
    },
  })
);
