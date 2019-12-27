import { cpiAmount, lateCharge, numberIntoFloat } from '../app.js';
const payoffAmount = document.getElementById('payoff-amount');
const originalFrequency = document.getElementById('option-frequency');
const hasCpi = document.getElementById('cpi');
const botonSubmit = document.getElementById('boton-submit');

botonSubmit.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(cpiAmount(payoffAmount, originalFrequency, hasCpi));
});

// console.log(typeof numberIntoFloat());

console.log(cpiAmount(payoffAmount, originalFrequency, hasCpi));
