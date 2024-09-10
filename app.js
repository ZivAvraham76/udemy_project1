let ageInput = document.querySelector("#ageInput");
let calcBTN = document.querySelector("#calcBTN");
let result = document.querySelector("#result");
let displayResult = document.querySelector("#displayResult");
let resetBTN = document.querySelector("#resetBTN");
let refresh = document.querySelector(".refresh");


let mytimer;
let age;

calcBTN.addEventListener('click',function(){
    age = ageInput.value.trim();

    if(age == ""){

        clearInterval(mytimer);

        let alert = document.querySelector(".alert");
        alert.classList.add('active');

        mytimer = setInterval(function(){
            alert.classList.remove('active');
        },3000)
    }
    else if(isNaN(age) == true){

        clearInterval(mytimer);

        let alert2 = document.querySelector(".alert2");
        
        alert2.classList.add('active');

        mytimer = setInterval(function(){
            alert.classList.remove('active2');
        },3000)
    }

    else{
        let answer = document.querySelector(".answer");
        answer.classList.add('active');
        let remaining_years = 90 - age;
        let remaining_weeks = remaining_years * 52;

        result.innerHTML = seperateNumbersInComma(remaining_weeks);
        ageInput = "";
    }
});

function seperateNumbersInComma(weeks) {
    return weeks.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

resetBTN.addEventListener('click', function(){
    refresh.click();
})