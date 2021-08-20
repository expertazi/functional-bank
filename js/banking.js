document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositInput = document.getElementById("deposit-input");
  const depositAmount = depositInput.value;
  const newDepositAmount = parseFloat(depositAmount);
  //   console.log(depositAmount);
  //   get currrent deposit
  const depositTotal = document.getElementById("deposit-total");
  const depositTotalText = depositTotal.innerText;

  const previewousDeposiTotal = parseFloat(depositTotalText);

  depositTotal.innerText = previewousDeposiTotal + newDepositAmount;
  //   console.log(depositTotalText);

  //   Current Balance
  const balenceTotal = document.getElementById("balance-total");
  const balanceTotalText = parseFloat(balenceTotal.innerText);
  //   const previousBalenceTotal = parseFloat(balanceTotalText);
  balenceTotal.innerText = balanceTotalText + newDepositAmount;
  //   clear input fild
  depositInput.value = "";
});

// This is For withdraw Button
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const wihdrawInput = document.getElementById("withdraw-input");
  const withdrawAmount = parseFloat(wihdrawInput.value);

  const withdrawTotal = document.getElementById("withdraw-total");
  const withdrawTotalText = parseFloat(withdrawTotal.innerText);
  const withTotalCal = withdrawAmount + withdrawTotalText;
  withdrawTotal.innerText = withTotalCal;

  //   Current Balance
  const balenceTotal = document.getElementById("balance-total");
  const balanceTotalText = parseFloat(balenceTotal.innerText);
  //   const previousBalenceTotal = parseFloat(balanceTotalText);
  balenceTotal.innerText = balanceTotalText - withdrawAmount;

  //   clear Input Data
  wihdrawInput.value = "";
});
