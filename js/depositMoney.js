let saldo = 10000;

function consignar() {
    let monto = Number(prompt("Ingrese el monto a consignar:"));

    if (monto > 0) {

        // este es una funcion

        saldo += monto;

        console.log("Consignación exitosa.");
        console.log("Monto consignado: $" + monto);
        console.log("Nuevo saldo: $" + saldo);

    } else {
        console.log(" Monto inválido");
    }
}

consignar()