/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/parts/_calc.js":
/*!*******************************!*\
  !*** ./src/js/parts/_calc.js ***!
  \*******************************/
/***/ ((module) => {

function calc() {
    let optionsPeople = document.querySelectorAll('.counter-block-input') [0],
        optionsDays = document.querySelectorAll('.counter-block-input') [1],
        totalValue = document.getElementById('total'),
        select = document.getElementById('select'),
        peopleSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0; 

        optionsPeople.addEventListener ('input', function (){ 
            peopleSum = +this.value; 
            total = (daysSum + peopleSum)*5600.30; 

            if (optionsDays.value == '' || optionsPeople.value == ''|| optionsDays.value == 0 || optionsPeople.value == 0) {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        });

        optionsDays.addEventListener ('input', function (){ 
            daysSum = +this.value;
            total = (daysSum + peopleSum)*4000;

            if (optionsDays.value == '' || optionsPeople.value == ''|| optionsDays.value == 0 || optionsPeople.value == 0) {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        });
    
    select.addEventListener ('input', function (){
        if (optionsDays.value == '' || optionsPeople.value == ''|| optionsDays.value == 0 || optionsPeople.value == 0) {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }

    });
}
module.exports = calc;

/***/ }),

/***/ "./src/js/parts/_modalWin.js":
/*!***********************************!*\
  !*** ./src/js/parts/_modalWin.js ***!
  \***********************************/
/***/ ((module) => {

function modalWin() {
    let more = document.querySelector ('.more'),
    overlay = document.querySelector ('.overlay'),
        close = document.querySelector ('.popup-close');

        more.addEventListener ('click', function () {
            overlay.style.display = 'block';
            this.classList.add ('more-splash');
            document.body.style.overflow = 'hidden';
        });

        close.addEventListener ('click', function() {
            overlay.style.display = 'none';
            this.classList.remove('more-splash');
            document.body.style.overflow = '';  
        });

    let descBtn = document.querySelector ('.description-btn');
    descBtn.addEventListener ('click', function (){
        overlay.style.display = 'block';
        this.classList.add ('fade');

});
}
module.exports = modalWin;

/***/ }),

/***/ "./src/js/parts/_reqForm.js":
/*!**********************************!*\
  !*** ./src/js/parts/_reqForm.js ***!
  \**********************************/
/***/ ((module) => {

function reqForm() {
    let form1 = document.getElementById('form'),
    input1 = form1.getElementsByTagName('input');

    form1.addEventListener ('submit', function(event) {
        event.preventDefault();
        let formData1 = new FormData (form1);

        function postData1 (Data) {
            return new Promise ((resolt, reject) => {
                let request1 = new XMLHttpRequest ();
                request1.open ('POST', 'server.php');
                request1.setRequestHeader ('Content-Type', 'application/json; charset=utf-8');
                request1.onreadystatechange = function () {
                    if (request1.readyState < 4) {
                        if  (request1.status == 200) {
                            resolt ()
                        } else {reject ()}
                    } 
                }

            let  obj = {}
            formData1.forEach (function(value, key ){
                obj[key] = value;
            });
            let json = JSON.stringify(obj);
            request1.send(json);
            }); 
        }

    function clearInpit1() {
        for (let i = 0; i < input1.length; i++) {
            input1[i].value = ''; 
        }
    }
    postData1(formData1)
            .then( resolt => input1.value = 'Мы скоро свяжемся с Вами')  
            .catch (error => input1.value = 'Что-то пошло не так')
            .then(clearInpit1)
    
    });

}
module.exports = reqForm;

/***/ }),

/***/ "./src/js/parts/_reqModalWin.js":
/*!**************************************!*\
  !*** ./src/js/parts/_reqModalWin.js ***!
  \**************************************/
/***/ ((module) => {

function reqModalWin() {
    let message = {
        loading: 'Загрузка...',
        succes : 'Спасибо! Мы скоро с Вами свяжемся',
        failure: 'Что-то пошло не так',
    };

    let form = document.querySelector('.main-form');
    let input = form.getElementsByTagName('input');
    let statusMessage = document.createElement ('div');
    statusMessage.classList.add('status');
    
    form.addEventListener ('submit', function (event) {
        event.preventDefault();
        form.appendChild(statusMessage);
        let formData = new FormData (form);
    
    function postData(data) {
        return new Promise((resolt, reject) => {
            let request = new XMLHttpRequest ();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.onreadystatechange = function () {

                if (request.readyState < 4){
                    resolt()
                } else if (request.readyState === 4 && request.status == 200) {
                    resolt()
                } else {
                    reject()
                }
            }

            let  obj = {}
                formData.forEach (function(value, key ){
                    obj[key] = value;
                });
                let json = JSON.stringify(obj);
                request.send(json);
        })
    }
    function clearInpit() {
        for (let i = 0; i < input.length; i++) {
            input[i].value = ''; 
        }
    }
        postData(formData)
            .then(()=> statusMessage.innerHTML = message.loading)
            .then (() => statusMessage.innerHTML = message.succes)
            .catch(()=> statusMessage.innerHTML = message.failure)
            .then(clearInpit)

    });

}
module.exports = reqModalWin;

/***/ }),

/***/ "./src/js/parts/_slider.js":
/*!*********************************!*\
  !*** ./src/js/parts/_slider.js ***!
  \*********************************/
/***/ ((module) => {

function slider() {
    let slideIndex = 1, /* Параметр текущего слайда */
        sliderItem = document.querySelectorAll('.slider-item'),
        prev = document.querySelector ('.prev'),
        next = document.querySelector ('.next'),
        sliderWrapp = document.querySelector ('.slider-dots'),
        dots = document.querySelectorAll ('.dot');

        showSlides (slideIndex);
        function showSlides(n) {
            if (n > sliderItem.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = sliderItem.length;
            }

            sliderItem.forEach((item) =>item.style.display ='none');
            // for (let i = 0; i <sliderItem.length; i++) {
            //     sliderItem[i].style.display = 'none'
            // } альтернативный вариант 
            dots.forEach ((item) => item.classList.remove('dot-active'));
            sliderItem[slideIndex -1].style.display = 'block';
            dots[slideIndex - 1].classList.add('dot-active');
        }

        function pluseSlaider(n){
            showSlides(slideIndex += n);
        }
        function currentSlider(n){
            showSlides(slideIndex = n);
        }
        prev.addEventListener('click', function (){
            pluseSlaider(-1);
        });

        next.addEventListener ('click', function(){
            pluseSlaider(1);
        });

        sliderWrapp.addEventListener('click', function(event){
            for (let i = 0; i < dots.length +1; i++) {
                if (event.target.classList.contains('dot') &&  event.target == dots[i-1]) {
                    currentSlider(i);
                }
            }

        });
}
module.exports = slider;

/***/ }),

/***/ "./src/js/parts/_tabs.js":
/*!*******************************!*\
  !*** ./src/js/parts/_tabs.js ***!
  \*******************************/
/***/ ((module) => {

function tabs() {

    let infoHeader = document.querySelector ('.info-header'),
        infoHeaderTab = document. querySelectorAll ('.info-header-tab'),
        infoTabContent = document.querySelectorAll ('.info-tabcontent');

    function hideInfoTabContent (a) {
        for (let i = a; i < infoTabContent.length; i++) {
            infoTabContent[i].classList.remove('show');
            infoTabContent[i].classList.add('hide');
        }
    }
    hideInfoTabContent(1);

    function showinfoTabContent (b) {
        if (infoTabContent[b].classList.contains('hide')) {
            infoTabContent[b].classList.remove('hide');
            infoTabContent[b].classList.add('show');  
        }
    }

    infoHeader.addEventListener('click', function(event){
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < infoHeaderTab.length; i++) {
                if (target == infoHeaderTab[i]){
                    hideInfoTabContent(0);
                    showinfoTabContent (i);
                    break;
                }
            }
        }
    });

}
module.exports = tabs;

/***/ }),

/***/ "./src/js/parts/_timer.js":
/*!********************************!*\
  !*** ./src/js/parts/_timer.js ***!
  \********************************/
/***/ ((module) => {

function timer() {

    let deadline = '2022-02-15';

        function getTimeCount(endtime){                   
            let t = Date.parse(endtime)- Date.parse(new Date()), 
                seconds = Math.floor((t/1000) %60),        
                minutes = Math.floor((t/(1000*60)) %60),     
                hours = Math.floor(t/(1000*60*60) %24),
                days = Math.floor ((t/(1000*60*60*24)) % 30);   
                return {                                    
                    'total':t,
                    'days': days,
                    'seconds': seconds,
                    'minutes': minutes,
                    'hours': hours
                };
        }
    
        function initializeClock (id, endtime) {            
            let timer = document.getElementById ('timer'),
            daysSpan = timer.querySelector ('.days'),
            hoursSpan = timer.querySelector('.hours'),
            minutesSpan = timer.querySelector('.minutes'),
            secondsSpan = timer.querySelector ('.seconds'),
            timeinterval = setInterval(updateClock, 1000);

        function updateClock () {                           
            let t = getTimeCount(endtime);              
                secondsSpan.textContent =   ('0' + t.seconds).slice(-2);   
                minutesSpan.textContent =   ('0' + t.minutes).slice(-2); 
                hoursSpan.textContent =     ('0' + t.hours).slice(-2);
                daysSpan.textContent =      ('0' + t.days).slice(-2);       
            
        if (t.total <= 0) {                       
            clearInterval(timeinterval);
            hoursSpan.textContent = '00';          
            minutesSpan.textContent = '00';
            secondsSpan.textContent = '00';
            daysSpan.textContent = '00';
            }
        }
        updateClock ();                                  
    }
    initializeClock ('timer', deadline);                    


}
module.exports = timer;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
window.addEventListener ('DOMContentLoaded', function () {

'use strict';

let calc = __webpack_require__ (/*! ./parts/_calc.js */ "./src/js/parts/_calc.js"),
    modalWin = __webpack_require__ (/*! ./parts/_modalWin.js */ "./src/js/parts/_modalWin.js"),
    reqForm = __webpack_require__ (/*! ./parts/_reqForm.js */ "./src/js/parts/_reqForm.js"),
    reqModalWin = __webpack_require__ (/*! ./parts/_reqModalWin.js */ "./src/js/parts/_reqModalWin.js"),
    slider = __webpack_require__ (/*! ./parts/_slider.js */ "./src/js/parts/_slider.js"),
    tabs = __webpack_require__ (/*! ./parts/_tabs.js */ "./src/js/parts/_tabs.js"),
    timer = __webpack_require__ (/*! ./parts/_timer.js */ "./src/js/parts/_timer.js");


    calc();
    modalWin();
    reqForm();
    reqModalWin();
    slider();
    tabs();
    timer();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map