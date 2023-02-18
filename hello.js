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
    const depositNumber = updateWithdraw("deposit-amount");

    updateSpanTag("current-deposit", depositNumber);
    updateSpanTag("current-balance", depositNumber);
    document.getElementById("deposit-amount").value = "";
})

// withdraw btn eventlistener
const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function(){
        const withdrawNumber = updateWithdraw("withdrawAmount");
        updateSpanTag("current-withdraw", withdrawNumber);
        updateSpanTag("current-balance", -1 * withdrawNumber);
        document.getElementById("withdrawAmount").value = "";
})

function updateWithdraw(id){
    const withdrawAmount = document.getElementById(id).value;
    const currentAmount = parseFloat(withdrawAmount);
    return currentAmount;
}

function updateSpanTag(id, depositNumber){
    const currentBalance = document.getElementById(id).innerText;
    const currentDepositBalance = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentDepositBalance;
    document.getElementById(id).innerText = totalBalance;
}