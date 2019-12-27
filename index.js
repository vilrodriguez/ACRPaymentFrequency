import { cpiAmount, lateCharge, numberIntoFloat } from '../app.js';
const payoffAmount = document.getElementById('payoff-amount');
const paymentAmount = document.getElementById('pmt-amount');
const originalFrequency = document.getElementById('option-frequency');
const hasCpi = document.getElementById('cpi');
const hasLateCharge = document.getElementById('late-charge');
const botonSubmit = document.getElementById('boton-submit');

botonSubmit.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(cpiAmount(payoffAmount, originalFrequency, hasCpi));
    console.log(lateCharge(paymentAmount,hasLateCharge ));
});

// console.log(typeof numberIntoFloat());

console.log(cpiAmount(payoffAmount, originalFrequency, hasCpi));
