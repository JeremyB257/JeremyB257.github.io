//Const
const rating = document.querySelectorAll('input.rate')
const btnSubmit = document.getElementById('btnSubmit');
const container = document.getElementById('container');

//Event listener

rating[0].addEventListener('click', function() { updateRating(0) });
rating[1].addEventListener('click', function() { updateRating(1) });
rating[2].addEventListener('click', function() { updateRating(2) });
rating[3].addEventListener('click', function() { updateRating(3) });
rating[4].addEventListener('click', function() { updateRating(4) });
btnSubmit.addEventListener('click', sendRating);




// Function
 function updateRating(value){

    for(let i = 0; i < rating.length; i++) {
        if(i === value) {
            rating[value].setAttribute("class", "active");
        } else {
            rating[i].removeAttribute("class", "active");
        }
    }
};

function sendRating() {
    const searchResult = document.querySelector('.active');
    const result = searchResult.getAttribute('value');
    container.innerHTML = `
    <div class="container-ty">
        <img src="images/illustration-thank-you.svg" alt="ty"/>
        <div class="select">You selected ${result} out of 5 !
        </div>
        <h3>Thank you!</h3>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, 
        don’t hesitate to get in touch!</p>
    </div>`;
};

