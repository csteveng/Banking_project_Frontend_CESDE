function withdrawMoney() {
    const usuario = localStorage.getItem("Usuario1");
    const saldo = retrieveBalance();
    let saldoTotal;

    while (saldo > 0){
    alert (`hola  ${ usuario } \n tu saldo actual es de :  ${saldo} \n deseas retirar ?  `)
        let retirar = parseFloat(prompt("cuanto desea retirar: " ))

        if (saldo >= retirar){
            saldoTotal = addNewTransaction('withdraw', retirar);
            console.log("Retiro exitoso.");
            console.log("Monto retirado: $" + retirar);
            console.log("Nuevo saldo: $" + saldoTotal);
            return;
        } else { 
            alert("No tienes suficiente saldo para retirar esa cantidad.");
        }
    }
    alert("Tu saldo es 0. No puedes retirar más.");
}