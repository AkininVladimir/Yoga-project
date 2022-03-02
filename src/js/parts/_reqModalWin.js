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