// login button event handler
var loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function () {
    var loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';

    var transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
});



// deposit button event handler
var depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function () {
    var depositNumber = getInputNumber('depositAmount');

    updateSpanText('currentDeposit', depositNumber);
    updateSpanText('currentBalance', depositNumber);

    document.getElementById('depositAmount').value = '';
});



// withdraw button event handler
var withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function () {
    var withdrawNumber = getInputNumber('withdrawAmount');

    updateSpanText('currentWithdraw', withdrawNumber);
    updateSpanText('currentBalance', -1 * withdrawNumber);

    document.getElementById('withdrawAmount').value = '';
});



// global functions deceleration 
function getInputNumber(id) {
    var amount = document.getElementById(id).value;
    var number = parseFloat(amount);
    return number;
}

function updateSpanText(id, depositNumber) {
    var current = document.getElementById(id).innerText;
    var currentNumber = parseFloat(current);

    var total = depositNumber + currentNumber;
    document.getElementById(id).innerText = total;
}