import { cpiAmount, lateCharge } from '../app.js';

const payOff = document.getElementById('payoff-amount');
const originalPayment = document.getElementById('pmt-amount'); 
const hasCpi = document.querySelector('#cpi');
const originalFrequency = document.getElementById('option-frequency');
const hasCharge = document.getElementById('late-charge');

const botonSubmit = document.getElementById('boton-submit');
lateCharge(originalPayment, hasCharge);
const botonRefresh = document.getElementById('boton-refresh');

const paymentWithLateCharge = lateCharge(originalPayment, hasCharge) + parseFloat(originalPayment.value);

const payment = parseFloat(originalPayment.value);
cpiAmount(payOff, originalFrequency, hasCpi,originalPayment);


let payWithCpi = payment + cpiAmount(payOff, originalFrequency, hasCpi,originalPayment);

const fullPayment = payment + cpiAmount(payOff, originalFrequency, hasCpi,originalPayment) + lateCharge(originalPayment, hasCharge);

botonSubmit.addEventListener('click', (e)=>{
    e.preventDefault();

console.log('Late Charge of the payment: '+ lateCharge(originalPayment, hasCharge));
console.log('Payment with Late Charge: '+ paymentWithLateCharge);
console.log('CPI for the account: '+cpiAmount(payOff, originalFrequency, hasCpi,originalPayment ));
console.log('Payment with Cpi: '+ payWithCpi);
console.log(fullPayment);

/* payOff.value='';
originalPayment.value=''; 
hasCpi.value='';
originalFrequency.value='';

hasCharge.value=''; */

});
botonRefresh.addEventListener('click', (e)=>{
    e.preventDefault();

payOff.value='';
originalPayment.value=''; 
hasCpi.value='';
originalFrequency.value='';

hasCharge.value='';

});

hasCpi.addEventListener('checked', ()=>{
    const cpivalor = document.getElementById('cpi-value');
    cpivalor.innerHtml =cpiAmount(payOff, originalFrequency, hasCpi,originalPayment);
})