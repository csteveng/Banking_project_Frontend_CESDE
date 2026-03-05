let adminValidated = false;

function createUser() {
  let admin = prompt("Ingresa tu nombre: ");

  if (admin === "Andres") {
    let nombre1 = prompt("Ingrese el nombre de usuario: ");
    let password1 = prompt("Ingrese la contraseña: ");
    let saldoInicial1 = parseFloat(prompt("Ingrese el saldo inicial: "));

    localStorage.setItem("Usuario1", nombre1);
    localStorage.setItem("password1", password1);
    localStorage.setItem("saldoInicial1", saldoInicial1);
    localStorage.setItem("movimientos", "[]");

    adminValidated = true;
    alert(`Usuario "${nombre1}" registrado exitosamente`);
  } else {
    alert("No tienes permisos para esto");
    adminValidated = false;
  }
}

function logIn() {
  let passwordGuardada = localStorage.getItem("password1");
  let saldoGuardado = localStorage.getItem("saldoInicial1");
  let usuarioGuardado = localStorage.getItem("Usuario1");

  // Verificar que haya un usuario registrado
  if (!passwordGuardada || !usuarioGuardado) {
    alert("No hay ningún usuario registrado aún. El administrador debe registrar un usuario primero.");
    return;
  }

  let usuarioIngresado = prompt("Ingrese su nombre de usuario: ");

  if (usuarioIngresado !== usuarioGuardado) {
    alert("¡Usuario no encontrado!");
    return;
  }

  let intentos = 0;
  let autenticado = false;

  while (intentos < 3 && !autenticado) {
    let contra = prompt("Ingrese su contraseña:");

    if (contra === passwordGuardada) {
      alert(`Bienvenido ${usuarioGuardado}!\nSu saldo es de $${saldoGuardado}`);
      autenticado = true;
    } else {
      intentos++;
      if (intentos < 3) {
        alert(`Contraseña incorrecta. Te quedan ${3 - intentos} intentos`);
      }
    }
  }

  if (!autenticado) {
    alert("Superaste los intentos permitidos. Acceso bloqueado.");
  } else {
    showTransactionsMenu();
  }
}

let boton = document.getElementById("boton");
boton.addEventListener("click", logIn);

let boton2 = document.getElementById("boton2");
boton2.addEventListener("click", createUser);