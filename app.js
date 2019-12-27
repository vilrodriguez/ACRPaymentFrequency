export const numberIntoFloat = (amount) =>{
    console.log(parseFloat(amount.value));
  
  }; 
export const cpiAmount = (payOff, frequency, hasCPI) =>{
    let payOFF = parseFloat(payOff.value).toFixed(2);
    console.log(payOFF);
    let freq = frequency.value;
    console.log(freq);
    let hascpi = hasCPI.value;
    console.log(hascpi);
    let cpiAmount = 0;
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
    console.log(payAmount);
    let regularLatecharge = (payAmount * 5)/100;
    console.log(regularLatecharge);
    let robertsonLatecharge = parseFloat(15).toFixed(2);
    console.log(robertsonLatecharge);
    let hasLateCharge = late.value;
    let lc =0;
    if (hasLateCharge === 'YES'){
        lc = regularLatecharge;
    }
    else if (hasLateCharge ==='ROBERTSON15'){
        lc=robertsonLatecharge;
    }
    
    else{
       lc = 0;
    }
  return lc;
        
}; 



