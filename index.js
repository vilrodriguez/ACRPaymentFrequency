import { cpiAmount, lateCharge, numberIntoFloat } from '../app.js';
const payoffAmount = document.getElementById('payoff-amount');
const botonSubmit = document.getElementById('boton-submit');

botonSubmit.addEventListener('click', (e)=>{
    e.preventDefault();

});

// console.log(typeof numberIntoFloat());
console.log( typeof cpiAmount(6000.598, 'monthly', 'YES'));
