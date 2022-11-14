const button = document.querySelector('.button');
const output = document.querySelector('.output');
let phone_content = document.querySelector('.phone');

button.addEventListener('click', updateOutput);

const yesButton = document.querySelector('.yes-button').addEventListener('click', yes);
const noButton = document.querySelector('.no-button').addEventListener('click', no);

function updateOutput() {
    output.textContent = phone_content.value;
}


async function getNumber() {
    let response;
    const randNum = () => Math.floor(Math.random()*10);
    const getNumString = n => new Array(n).fill(0).map(() => randNum()).join('');
    const generateNumber = () => '${getNumString(3)}-${getNumString(3)}-${getNumString(4)}';

    if(confirm("Is ", generateNumber, "your number?") == true) {
        response = "Thank you for entering your number!";
    }
    else{
        
    }

}