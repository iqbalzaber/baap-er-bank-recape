document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const depositFieldString = depositField.value;
    const newDepositAmount = parseFloat(depositFieldString);

    depositField.value='';

    const depositTotalElement =document.getElementById('deposit-total');
    const previousDepositTotalString= depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);


    const totalDeposit = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText= totalDeposit;



    // 
    const balanceTotalElement =document.getElementById('balance-total');
    const previousBalanceTotalString= balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    const totalBalance = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = totalBalance;



})


// withdraw


document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawFieldString);

    withdrawField.value='';

    const withdrawTotalElement =document.getElementById('withdraw-total');
    const previousWithdrawTotalString= withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    const totalWithdraw = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText= totalWithdraw;



    
    const balanceTotalElement =document.getElementById('balance-total');
    const previousBalanceTotalString= balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    const totalBalance = previousBalanceTotal -  newWithdrawAmount;
    balanceTotalElement.innerText = totalBalance;



})