let boton = document.getElementById("calcular");

boton.addEventListener("click", function () {

    let numero = Number(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(numero)) {
        resultado.className = "alert alert--error";
        resultado.textContent = "Error: debes ingresar un número.";
    } else {
        let factorial = 1;

        for (let i = 1; i <= numero; i++) {
            factorial = factorial * i;
        }

        resultado.className = "alert alert--success";
        resultado.textContent = "El factorial de " + numero + " es: " + factorial;
    }

    resultado.hidden = false;

});