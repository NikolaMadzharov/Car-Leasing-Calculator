
document.addEventListener('DOMContentLoaded', () => {
    
  
   
    const downPayment = document.getElementById('downPaymentRange');
    const carPayment = document.getElementById('carValueRange');

    const downPaymentText = document.getElementById('downPaymentText');
    const carPaymentText = document.getElementById('carValue');

    
   
    downPayment.addEventListener('input', () => {
        downPaymentText.textContent = `${downPayment.value}%`;
        calculate();
    });

    carPayment.addEventListener('input', () => {
        carPaymentText.textContent = `${carPayment.value}%`;
        calculate();
    });

    
});

function calculate() {
    const carValue = document.getElementById('carValue');
    const leasePeriod = document.getElementById('leasePeriod');
   
    const downPayment = document.getElementById('downPaymentRange');
    const carPayment = document.getElementById('carValueRange');

    const downPaymentText = document.getElementById('downPaymentText');
    const carPaymentText = document.getElementById('carValue');

    

    

    const leasingCost = document.getElementById('leasingCost');
    const downPaymentValue = document.getElementById('downPaymentValue');
    const monthlyInstallment = document.getElementById('monthlyInstallment');
    const interestRate = document.getElementById('interestRate');
    const carValueAmount = parseFloat(carValue.value);
    const leasePeriodMonths = parseInt(leasePeriod.value);
    const downPaymentPercent = parseInt(downPayment.value);
   
    const downPaymentAmount = carValueAmount && downPaymentPercent ? carValueAmount * (downPaymentPercent / 100) : 0;
    const interest = carTypeDropdown.value === 'new' ? 0.0299 : 0.037
    const monthlyRate = interest / 12;
        console.log(leasePeriod.value);

    const monthlyPayment = carValueAmount &&
        downPaymentAmount &&
        monthlyRate &&
        leasePeriodMonths ?
        (carValueAmount - downPaymentAmount) *
        (monthlyRate * Math.pow(1 + monthlyRate, leasePeriodMonths)) /
        (Math.pow(1 + monthlyRate, leasePeriodMonths) - 1)
        : 0;
    const leasingCostAmount = monthlyPayment && leasePeriodMonths ?
        (monthlyPayment * leasePeriodMonths) + downPaymentAmount
        : 0;

    leasingCost.textContent = `€${leasingCostAmount.toFixed(2)}`;
    downPaymentValue.textContent = `€${downPaymentAmount.toFixed(2)}`;
    monthlyInstallment.textContent = `€${monthlyPayment.toFixed(2)}`;
    interestRate.textContent = `${(interest * 100).toFixed(2)}%`;
    downPaymentText.value = downPayment.value
    carPaymentText.value = carPayment.value
}


function interestCalculate(selectorCarType) {
   
    const interestRate = document.getElementById('interestRate');

    const interest = selectorCarType.value === 'new' ? 0.0299 : 0.037;

    interestRate.textContent = `${(interest * 100).toFixed(2)}%`;

    calculate()
}

function leaseCalculate() {
   
   
    calculate()
}


  

