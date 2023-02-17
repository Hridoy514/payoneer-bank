//login btn eventlistener
const clickAble = document.getElementById("clickMe");
clickAble.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})
//deposite btn eventlistener
const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function(){
    const depositAmount = document.getElementById("deposit-amount").value;
    const depositNumber = parseFloat(depositAmount);

    const currentDeposit = document.getElementById("current-deposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;
    document.getElementById("current-deposit").innerText = totalDeposit;

    const currentBalance = document.getElementById("current-balance").innerText;
    const currentDepositBalance = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentDepositBalance;
    document.getElementById("current-balance").innerText = totalBalance;

    document.getElementById("deposit-amount").value = "";
})