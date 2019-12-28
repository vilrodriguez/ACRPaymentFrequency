export const numberIntoFloat = (amount) =>{
    let newAmount=(parseFloat(amount.value));
    return newAmount;
  
  }; 
export const cpiAmount = (payOff, frequency, hasCPI) =>{
    let payOFF = parseFloat(payOff.value).toFixed(2);
    let freq = frequency.value;
    let hascpi = hasCPI.value;
    let cpiAmount = 0;
       /*  console.log(payOFF);
        console.log(freq);
        console.log(hascpi); */
    if (hascpi ==='YES'){
        if (payOFF >= 6000){
            if (freq ==='monthly'){
                cpiAmount =parseFloat(86.67);
            }
            if (freq ==='biweekly'){
                cpiAmount =parseFloat(40);
            }
            if (freq ==='semi-monthly'){
                cpiAmount =parseFloat(43.35);
            }
            if (freq ==='weekly'){
                cpiAmount =parseFloat(20);
            }
        }
        if (payOFF <= 5999){
            if (freq ==='monthly'){
                cpiAmount =parseFloat(65);
            }
            if (freq ==='biweekly'){
                cpiAmount =parseFloat(35);
            }
            if (freq ==='semi-monthly'){
                cpiAmount =parseFloat(30);
            }
            if (freq ==='weekly'){
                cpiAmount =parseFloat(15);
            }
        } return cpiAmount
    }else {
        cpiAmount = 0;
    }
    return cpiAmount;
};


export const lateCharge= (amount, late)=> {
    let payAmount = parseFloat(amount.value).toFixed(2);
    let hasLateCharge = late.value;
    let lc =0;
    /* let regularLatecharge = (payAmount * 5)/100; 
    let robertsonLatecharge = parseFloat(15);*/
    
    /* console.log(payAmount);
    console.log(regularLatecharge); */
    if (hasLateCharge === 'YES'){
        lc = (payAmount * 5)/100;
    }
    else if (hasLateCharge ==='ROBERTSON15'){
        lc=parseFloat(15);
    }
    
    else{
       lc = 0;
    }
  return lc;
        
}; 



