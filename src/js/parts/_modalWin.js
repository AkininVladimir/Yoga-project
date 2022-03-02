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