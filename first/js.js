const input = document.querySelector('.IN_number');
const button = document.querySelector('.phone');
const span = document.querySelector('.result');

const regExp = /^[1,0]\d{13}$/;
button.addEventListener('click', () => {
    if (regExp.test(input.value)) {
        span.innerText = 'correct';
        span.style.color = 'green';
    } else {
        span.innerText = 'not correct';
        span.style.color = 'red'
    }
})
