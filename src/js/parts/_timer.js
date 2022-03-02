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