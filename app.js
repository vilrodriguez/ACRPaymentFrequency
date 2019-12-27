export const cpiAmount = (payOff, frequency, hasCPI) =>{
    // let payOFF = payOff;
    let freq = frequency.value;
    let hascpi = hasCPI.value;
    let cpiAmount = 0;
    if (hascpi ==='YES'){
        if (payOff >= 6000){
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
        if (payOff <= 5999){
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
        }
    }else {
        cpiAmount = 0;
    }
    return cpiAmount;
};


export const lateCharge= (amount, late)=> {
    let payAmount = parseFloat(amount.value, 2);
    let regularLatecharge = (payAmount * 5)/100;
    let robertsonLatecharge = parseFloat(15, 2);
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



