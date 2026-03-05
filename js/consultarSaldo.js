function consultarSaldo () {
    let saldo = retrieveBalance();

    if(saldo > 0){
        console.log(`Tu saldo actual es ${saldo}`);;
    }

    else if (saldo === 0){
        alert ("Actualmente no tienes saldo disponible");
    } else {
        alert (" Tu saldo no puede ser negativo")
    }

}