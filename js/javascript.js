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
});

    







