// Оптимальное обявление для всех элементов на странице, которое загружает сначала дерево каталога
window.addEventListener('DOMContentLoaded', function () {
    'use strict';

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

    /* Таймер */

    let deadline = '2022-02-15';
    function getTimeCount(endtime){  
                                  /* Делаем расчет параметров времени через секунды  разбирает строковое представление даты и возвращает количество миллисекунд, прошедших с 1 января 1970 */
        let t = Date.parse(endtime)- Date.parse(new Date()), /* техническая переменная для расчета разницы времени между конечной и текущей датой */
            seconds = Math.floor((t/1000) %60),         /* округляем значение рачета и % 60 берем конечное значение секунд */
            minutes = Math.floor((t/(1000*60)) %60),      /* округляем значение рачета и % 60 берем конечное значение минут */
            hours = Math.floor(t/(1000*60*60) %24),
            days = Math.floor ((t/(1000*60*60*24)) % 30);   /* округляем значение рачета и % 60 берем конечное значение часов */
            return {                                    /* возвращаем полученные значения в агумент функции */
                'total':t,
                'days': days,
                'seconds': seconds,
                'minutes': minutes,
                'hours': hours
            };
    } 

    function initializeClock (id, endtime) {            /* создаем функцию запускающюю обратный отсчет */
                                                        /* передаем значения родительского элемента имеющий id=timer */
        let timer = document.getElementById ('timer'),
            daysSpan = timer.querySelector ('.days'),
            hoursSpan = timer.querySelector('.hours'),
            minutesSpan = timer.querySelector('.minutes'),
            secondsSpan = timer.querySelector ('.seconds'),
            timeinterval = setInterval(updateClock, 1000); 
                                                        
                                                        /* Создаем функцию обновления параметров даты которая будет меняться каждую секунду */
        function updateClock () {                           
            let t = getTimeCount(endtime);              /* передача данных о времени из ранее полученого расчета*/
                secondsSpan.textContent =   ('0' + t.seconds).slice(-2);   /* передача информации о пересчете времени в HTML */
                minutesSpan.textContent =   ('0' + t.minutes).slice(-2); /* передача информации о пересчете времени в HTML */
                hoursSpan.textContent =     ('0' + t.hours).slice(-2);
                daysSpan.textContent =      ('0' + t.days).slice(-2);       /* передача информации о пересчете времени в HTML */
                
            if (t.total <= 0) {                         /* создаем условие для остановки таймера */
                clearInterval(timeinterval);
                hoursSpan.textContent = '00';           /* в случае остановки таймера все значения обнулятся */
                minutesSpan.textContent = '00';
                secondsSpan.textContent = '00';
                daysSpan.textContent = '00';
              }
        }
        updateClock ();                                  /* вызываем функцию обновления параметров даты */
    }
    initializeClock ('timer', deadline);                 /* вызываем функцию обратного отсчета */

/* Модальное окно */

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

//        /*  Отправка формы запроса на сервер из модального окна */

// let message = {
//     loading: 'Загрузка...',
//     succes : 'Спасибо! Мы скоро с Вами свяжемся',
//     failure: 'Что-то пошло не так',
// };
// // создаем Объект с ответами для обратной связи сервера с пользователем

// let form = document.querySelector('.main-form');
// let input = form.getElementsByTagName('input');
// let statusMessage = document.createElement ('div'); /* создаем новый элемент на странице для записи события обратной связи */
    
//     statusMessage.classList.add('status'); /* задаем стили вновь созданному элементу, класс уже есть в стилях css */

//     /* Вешаем обработчик событий для формы, важно что для формы , а не для кнопки */
// form.addEventListener ('submit', function (event) {
//     event.preventDefault();
//     /* Отменяем стандартное поведение формы для браузера, т.е. обновление страницы */
//     form.appendChild(statusMessage);
//     /* При событии submit мы в нашу форму будем добавлять div */

// let request = new XMLHttpRequest ();
//     /* создаем запрос */
//     request.open('POST', 'server.php');
//     /* Добавляем настройки запроса */
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     /* Добавляем настройки заголовков запроса */

// let formData = new FormData (form);
//     /* Получаем данные которые ввел пользователь во все input */
//     // request.send(formData);

//    /* для передачи данных в формате JSON  */
// let  obj = {}/* создаем объект сюда будут предавать данные */
//     formData.forEach (function(value, key ){
//         obj[key] = value;
//     });
//     let json = JSON.stringify(obj);
//     request.send(json);
//     /* для передачи данных в формате JSON  */

// request.addEventListener ('readystatechange', function (){ /* Для понимания статуса обработки запроса пользователем необходимо события обработки сервера превратить в наглядную строку */
//     if (request.readyState < 4){
//         statusMessage.innerHTML = message.loading;
//     } else if (request.readyState === 4 && request.status == 200) {
//         statusMessage.innerHTML = message.succes;
//     } else {
//         statusMessage.innerHTML = message.failure;
//     }
//     /* Создаем условия для отправки соответсвующего уведомления пользователю о статусе загрузки */
// });

// for (let i = 0; i < input.length; i++) {
//     input[i].value = ''; 
// }
// /*  создаем услове для очистки полей input после отправки сообщений серверу */

// });


/*  Отправка формы запроса на сервер из модального окна при помощи promis*/

let message = {
    loading: 'Загрузка...',
    succes : 'Спасибо! Мы скоро с Вами свяжемся',
    failure: 'Что-то пошло не так',
};
// создаем Объект с ответами для обратной связи сервера с пользователем

let form = document.querySelector('.main-form');
let input = form.getElementsByTagName('input');
let statusMessage = document.createElement ('div'); 
/* создаем новый элемент на странице для записи события обратной связи */
    statusMessage.classList.add('status'); 
/* задаем стили вновь созданному элементу, класс уже есть в стилях css */

    /* Вешаем обработчик событий для формы, важно что для формы , а не для кнопки */
form.addEventListener ('submit', function (event) {
    event.preventDefault();
    /* Отменяем стандартное поведение формы для браузера, т.е. обновление страницы */
    form.appendChild(statusMessage);
    /* При событии submit мы в нашу форму будем добавлять div */
    let formData = new FormData (form);
    /* Получаем данные которые ввел пользователь во все input */
    // request.send(formData); заменили на запросы AJAX

    function postData(data) {
        return new Promise((resolt, reject) => {
            let request = new XMLHttpRequest ();
                /* создаем запрос */
                request.open('POST', 'server.php');
                /* Добавляем настройки запроса */
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                /* Добавляем настройки заголовков запроса */
            request.onreadystatechange = function () {
                if (request.readyState < 4){
                    resolt()
                } else if (request.readyState === 4 && request.status == 200) {
                    resolt()
                } else {
                    reject()
                }
            }
                let  obj = {}/* создаем объект, сюда будут предавать данные */
                formData.forEach (function(value, key ){
                    obj[key] = value;
                });
                let json = JSON.stringify(obj);
                request.send(json);
                /* для передачи данных в формате JSON  */
        })

    } /* finished postData */

    function clearInpit() {
        for (let i = 0; i < input.length; i++) {
            input[i].value = ''; 
        }
        /*  создаем услове для очистки полей input после отправки сообщений серверу */
    }

    postData(formData)
        .then(()=> statusMessage.innerHTML = message.loading)
        .then (() => statusMessage.innerHTML = message.succes)
        .catch(()=> statusMessage.innerHTML = message.failure)
        .then(clearInpit)

});

// /* Создаем запрос на сервер из формы обратной связи */

// let form1 = document.getElementById ('form'),
//     input1 = form1.getElementsByTagName('input');

// form1.addEventListener ('submit', function(event) {
//     event.preventDefault();

// let request1 = new XMLHttpRequest ();
//     request1.open ('POST', 'server.php');
//     request1.setRequestHeader ('Content-Type', 'application/json; charset=utf-8'); /* ('Content-Type', 'application/x-www-form-urlencoded'); */


// let formData1 = new FormData (form1);
//     // request1.send(formData1);
    
// let obj = {};
//  formData1.forEach(function (value, key){
//         obj[key] = value;
//     });
//     let json = JSON.stringify(obj);

// request1.send(json);

// for (let i = 0; i < input1.length; i++) {
//     input1[i].value = ''; 
// }
 
// });

/* Создаем git add  */

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

/* Слайдер*/

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

        /* Калькулятор */
    
    let optionsPeople = document.querySelectorAll('.counter-block-input') [0],
        optionsDays = document.querySelectorAll('.counter-block-input') [1],
        totalValue = document.getElementById('total'),
        select = document.getElementById('select'),
        peopleSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0; /* Обнуляем значение HTML посредством JS */

        optionsPeople.addEventListener ('input', function (){ /* Навешиваем обрабдлтчик событий  */
            peopleSum = +this.value; /* присваиваем знвечения количества людей c контектом вызова this */
            total = (daysSum + peopleSum)*5600.30; 

            if (optionsDays.value == '' || optionsPeople.value == ''|| optionsDays.value == 0 || optionsPeople.value == 0) {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        });

        optionsDays.addEventListener ('input', function (){ /* Аналогично инпуту optionsPeoople */
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






});