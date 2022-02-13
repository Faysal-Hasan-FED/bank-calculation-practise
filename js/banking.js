const error = document.getElementById('error');
error.style.display = 'none';

document.getElementById("deposit-button").addEventListener('click',function(){
  error.style.display = 'none';
   const depositAmount= getInputValue('deposit-input');
   const updatedAmount= updateAmount('deposit-amount',depositAmount);
   updateBalance(depositAmount,true);
})
document.getElementById("withdraw-button").addEventListener('click',function(){
    error.style.display = 'none';
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount <= currentBalance){
        const updatedAmount=  updateAmount('withdraw-amount',withdrawAmount);
        updateBalance(withdrawAmount,false);
    }
    else{
        showError();
    }
    
})

// show error info
function showError(){
   return error.style.display = 'block';
}

// get the input value
function getInputValue(input){
    const inputField = document.getElementById(input);
    const inputFieldText = inputField.value;
    const inputFieldAmount = parseFloat(inputFieldText);
    // clear input field
    inputField.value= '';
    return inputFieldAmount;
    
   
    
}

// update amount

function updateAmount(input,amount){
    const previousAmountField = document.getElementById(input);
    const previousAmountText = previousAmountField.innerText;
    const previousAmount = parseFloat(previousAmountText);
    const updatedAmount = previousAmount + amount;
    if(amount > 0 && isNaN(amount)!= true){
        previousAmountField.innerText = updatedAmount;
        return updatedAmount;
    }
    else{
        showError();
    }
}

function updateBalance(amount,isAdd){
    const totalField = document.getElementById('total-amount');
    const totalFieldText = totalField.innerText;
    const totalFieldAmount = parseFloat(totalFieldText);
    if(amount >0){
        if(isAdd == true){
            const updatedTotal = totalFieldAmount + amount;
            totalField.innerText = updatedTotal;
        }
        else{
            const updatedTotal = totalFieldAmount - amount;
            totalField.innerText = updatedTotal;
        }
    }
  
}

// get current balance

function getCurrentBalance(){
    const currentBalanceField = document.getElementById('total-amount');
    const currentBalanceText = currentBalanceField.innerText;
    const currentBalance = parseFloat(currentBalanceText);
    return currentBalance;
}