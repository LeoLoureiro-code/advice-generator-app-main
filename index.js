const API_URL = 'https://api.adviceslip.com/advice';
const newAdvice = document.getElementById('new-advice');
const adviceNumber = document.getElementById('advice-number');
const adviceText = document.getElementById('advice');

const getAdvice = () =>{
    advice.innerHTML = "loading...";
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
        const {advice, id} = data.slip;
        adviceNumber.innerHTML = id;
        adviceText.innerHTML = advice;
    })
}

newAdvice.addEventListener('click', getAdvice);