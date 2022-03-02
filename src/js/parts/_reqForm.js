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