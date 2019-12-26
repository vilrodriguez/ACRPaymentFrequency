import { numero } from '../app.js';

const payOff = document.getElementById('payoff-amount');
const originalPayment = document.getElementById('option-frequency');
const cpi = document.getElementById('cpi-amount');
const originalFrequency = document.getElementById('option-frequency');
const lateCharge = document.getElementById('late-charge');

const botonSubmit = document.getElementById('boton-submit');

botonSubmit.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log(payOff.value);
    console.log(originalPayment.value);
console.log(cpi.value);
console.log(originalFrequency.value);
console.log(lateCharge.value);
console.log (numero(parseInt(2), parseInt(5)));

});


// const cpiAmount = (payOff , cpiAmount) =>{
//     let cpiA = 0;
//     if (payOff.value >= 6000 && originalFrequency.value === 'monthly') {
//         cpiA = 86.67;
//     }
//     if (payOff.value >= 6000 && originalFrequency.value === 'semi-monthly'){
//         cpiA = 86.67;
//     }
//     if (payOff.value >= 6000 && originalFrequency.value === 'semi-monthly'){
        
//     }
    
// }