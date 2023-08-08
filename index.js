const box = document.querySelector('.question-box');
const container = document.querySelector('.container');
const response = document.querySelector('.response-page');
const gifItem = document.querySelectorAll('.gif-item');
let gifList = [];

const randomizer = () => {
    gifItem.forEach(gif => {
        gifList.push(gif);
    })
    let gifRandom = Math.floor(Math.random() * gifList.length);
    let gifChoice = gifList[gifRandom];
    console.log(gifChoice)
    gifChoice.classList.remove('not-active');
}

function generate(e) {
    if (e.key === 'Enter') {
        container.classList.add('hidden');
        response.classList.remove('hidden');
        randomizer();
    }
}

box.addEventListener('keydown', generate);