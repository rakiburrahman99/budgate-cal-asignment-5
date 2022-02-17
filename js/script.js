//get input value
function getExpenseValue(expenseArea) {
    const expenseInput = document.getElementById(expenseArea + '-input');
    const expenseAmount = parseInt(expenseInput.value);
    return expenseAmount;
}
//caught id for text
function getId(param) {
    const field = document.getElementById(param);
    const amount = parseInt(field.innerText);
    return amount;
}

//handle calculate

document.getElementById('calculate').addEventListener('click', function () {
    const incomeInput = getExpenseValue('income');
    const foodTotal = getExpenseValue('food');
    const rentTotal = getExpenseValue('rent');
    const clothTotal = getExpenseValue('cloth');
    const negativeError = document.getElementById('negative-error');
    const expenseError = document.getElementById('expense-error');
    const incomeError = document.getElementById('income-error');
    const stringError = document.getElementById('string-error');
    const expenseTotal = foodTotal + rentTotal + clothTotal;
    //error handle:
    console.log(expenseTotal);
    if (foodTotal < 0 || rentTotal < 0 || clothTotal < 0) {
        negativeError.style.display = 'block';
    }
    else if (incomeInput < 0) {
        incomeError.style.display = 'block';
    }

    else if (expenseTotal > incomeInput) {
        expenseError.style.display = 'block';
    }
    else if (isNaN(incomeInput)) {
        stringError.style.display = 'block';
    }
    else if (isNaN(expenseTotal)) {
        stringError.style.display = 'block';
    }

    else {
        let expenseTaka = document.getElementById('total-expense').innerText = expenseTotal;
        let balance = getId('total-balance');
        balance = incomeInput - expenseTotal;
        let balanceTotal = document.getElementById('total-balance').innerText = balance;
    }

});


document.getElementById('save-btn').addEventListener('click', function () {
    let saveInput = getExpenseValue('save');
    let balance = getId('total-balance');
    const balanceError = document.getElementById('balance-error');
    if (balance > saveInput) {
        //percentage calculate:
        let savings = (balance / 100) * saveInput;
        let savingAmount = document.getElementById('saving-amount').innerText = savings.toFixed(2);

        let remainingBalance = getId('remaining-balance');
        let stockAfterSave = (balance - savings).toFixed(2);
        document.getElementById('remaining-balance').innerText = stockAfterSave;
    }
    else {
        balanceError.style.display = 'block';
    }

    //clear value
    document.getElementById('income-input').value = ' ';
    document.getElementById('food-input').value = ' ';
    document.getElementById('rent-input').value = ' ';
    document.getElementById('cloth-input').value = ' ';
    document.getElementById('save-input').value = ' ';

});


