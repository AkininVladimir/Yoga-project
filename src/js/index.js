window.addEventListener ('DOMContentLoaded', function () {

'use strict';

let calc = require ('./parts/_calc.js'),
    modalWin = require ('./parts/_modalWin.js'),
    reqForm = require ('./parts/_reqForm.js'),
    reqModalWin = require ('./parts/_reqModalWin.js'),
    slider = require ('./parts/_slider.js'),
    tabs = require ('./parts/_tabs.js'),
    timer = require ('./parts/_timer.js');


    calc();
    modalWin();
    reqForm();
    reqModalWin();
    slider();
    tabs();
    timer();
});