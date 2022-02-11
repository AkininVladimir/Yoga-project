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

    let deadline = '2022-02-12';
    function getTimeCount(endtime){  
                                  /* Делаем расчет параметров времени через секунды  разбирает строковое представление даты и возвращает количество миллисекунд, прошедших с 1 января 1970 */
        let t = Date.parse(endtime)- Date.parse(new Date()), /* техническая переменная для расчета разницы времени между конечной и текущей датой */
            seconds = Math.floor((t/1000) %60),         /* округляем значение рачета и % 60 берем конечное значение секунд */
            minutes = Math.floor((t/(1000*60)) %60),      /* округляем значение рачета и % 60 берем конечное значение минут */
            hours = Math.floor(t/(1000*60*60)),
            days = Math.floor ((t/(1000*60*60)) % 24);   /* округляем значение рачета и % 60 берем конечное значение часов */
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

});
 







