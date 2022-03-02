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