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