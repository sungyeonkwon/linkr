"use strict";

const setBgColor = () => {
  const bgColor = storage.getRecentItem().color
  const body = document.querySelector('body')
  body.style.background = bgColor;  
}
setBgColor();

const resultDom = document.querySelector('.test').textContent = storage.getRecentItem().url