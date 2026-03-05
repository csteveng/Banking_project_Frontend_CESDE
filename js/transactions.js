function saveTransactionsArrayLocalStorage (transactions) {
  const transactionsAsString = JSON.stringify(transactions);
  localStorage.setItem("movimientos", transactionsAsString);
}

function retrieveTransactionsArrayLocalStorage() {
  const transactions = localStorage.getItem("movimientos");
  const transactionsAsJSON = JSON.parse(transactions || []);
  return transactionsAsJSON;
}

function addNewTransaction (type, ammount) {
  const transactionsList = retrieveTransactionsArrayLocalStorage(); 
  transactionsList.push([new Date(), type, ammount]);
  const newBalance = updateBalance(type, ammount);
  saveTransactionsArrayLocalStorage(transactionsList);
  return newBalance;
}

function listAllTransactions() {
  const transactionsList = retrieveTransactionsArrayLocalStorage();
  if(!transactionsList) {
    alert('¡No hay datos de movimientos disponibles!');
  } else {
     transactionsList.forEach(transaction => {
    console.log(`Fecha: ${transaction[0]} Tipo: ${transaction[1]} Monto: ${transaction[2]}`);
  });
  }
 
}

function updateBalance (type, ammount) {
  let balance = retrieveBalance();
  if( type === 'deposit') {
    balance += ammount;
    localStorage.setItem('saldoTotal', balance);
  }
  else if (type === 'withdraw') {
    balance -= ammount;
    localStorage.setItem('saldoTotal', balance);
  }
  return balance;
}

function retrieveBalance (){
  return parseFloat(localStorage.getItem("saldoTotal") || localStorage.getItem("saldoInicial1"));
}

function showTransactionsMenu() {
  let userOption = prompt("Seleccione la transacción deseada: \n" +
  "1. Consultar saldo.\n" +
  "2. Retirar dinero.\n" +
  "3. Consignar dinero.\n" +
  "4. Consultar movimientos.")
  startTransaction(userOption);
}

function startTransaction(userOption) {
  switch (userOption) {
    case "1":
      consultarSaldo();
    break;
    case "2":
      withdrawMoney();
    break;
    case "3":
      consignarDinero();
    break;
    case "4":
      listAllTransactions();
    break;
    case null:
    return;
    default:
      alert("Opción no válida, intente nuevamente");
    break;
  }
  showTransactionsMenu();
}