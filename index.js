const box = document.querySelector('.question-box');
const container = document.querySelector('.container')
const response = document.querySelector('.response-page')

const generate = (e) => {
    if(e.key === 'Enter') {
        console.log('it worked')
    container.classList.add('hidden');
    response.classList.remove('hidden');
    }
}

box.addEventListener('keydown', generate);