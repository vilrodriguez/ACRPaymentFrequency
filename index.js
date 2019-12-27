import { cpiAmount, lateCharge, numberIntoFloat } from '../app.js';
const payoffAmount = document.getElementById('payoff-amount');
const paymentAmount = document.getElementById('pmt-amount');
const originalFrequency = document.getElementById('option-frequency');
const hasCpi = document.getElementById('cpi');
const hasLateCharge = document.getElementById('late-charge');
const botonSubmit = document.getElementById('boton-submit');

const showCPI = document.getElementById('cpi-valor');
const showLate = document.getElementById('late-valor');
const finalPay = document.getElementById('final-payment')
botonSubmit.addEventListener('click', (e)=>{
    e.preventDefault();
    /* console.log('Cpi Amount:' +cpiAmount(payoffAmount, originalFrequency, hasCpi));
    console.log('Late Charge: '+lateCharge(paymentAmount,hasLateCharge )); */
    showCPI.innerHTML= 'Cpi Amount: $' + cpiAmount(payoffAmount, originalFrequency, hasCpi);
    showLate.innerHTML='Late Charge: $'+lateCharge(paymentAmount,hasLateCharge );
console.log(numberIntoFloat(paymentAmount));
    
    const totalPay = cpiAmount(payoffAmount, originalFrequency, hasCpi) + lateCharge(paymentAmount,hasLateCharge ) + numberIntoFloat(paymentAmount);

    finalPay.innerHTML='Total original Payment is: $'+ totalPay;
});

// console.log(typeof numberIntoFloat());

/* console.log(cpiAmount(payoffAmount, originalFrequency, hasCpi)); */
