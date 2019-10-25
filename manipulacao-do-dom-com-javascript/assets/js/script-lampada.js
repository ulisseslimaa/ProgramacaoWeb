const lampadaClick = document.getElementById('lampadaClick');
const lampadaOver = document.getElementById('lampadaOver');

let statusClick = 'lampada'
let statusOver = 'lampada'

lampadaClick.addEventListener('click',()=>{
    statusClick = statusClick === 'lampada' ? 'lampada-on': 'lampada';
    lampadaClick.src = `assets/images/${statusClick}.jpg`;
});

lampadaOver.addEventListener('mouseover', () =>{
    statusOver = statusOver === 'lampada' ? 'lampada-on': 'lampada';
    lampadaOver.src = `assets/images/${statusOver}.jpg`;
})
