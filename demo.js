var dinero = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
var cambio = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function importedelosCambios(dineroEntregado, totalCompra) {
    var TotalaDevolver = 0;
    TotalaDevolver = dineroEntregado - totalCompra;
    return TotalaDevolver;
}

function calcularCambio(TotalaDevolver, dinero) {

    for (var i = 0; i < dinero.length; i++) {
        if (TotalaDevolver >= dinero[i]) {
            
            cambio[i] = parseInt(TotalaDevolver / dinero[i])
        }
        TotalaDevolver = TotalaDevolver - (cambio[i] * dinero[i]);
    }

}

function mostrarCambios(dinero, cambio) {
    for (var i = 0; i < dinero.length; i++) {
        var mensajeBilletes = "";
        var mensajeMonedas = "";
        if (cambio[i] > 0) {
            if (dinero[i] >= 5) {
                mensajeBilletes = document.getElementById("resultado").innerHTML;
                document.getElementById("resultado").innerHTML = mensajeBilletes + (cambio[i] + " Billetes de: " + dinero[i] + "€<br>")
            }
            else {
                mensajeMonedas = document.getElementById("resultado2").innerHTML;
                document.getElementById("resultado2").innerHTML = mensajeMonedas + (cambio[i] + " monedas de: " + dinero[i] + "€<br>")
            }
        }
    }

}

document.getElementById("boton-calcular").addEventListener("click", function () {

    var TotalaDevolver = importedelosCambios(document.getElementById("dinero-entregado").value, document.getElementById("precio-compra").value)
    calcularCambio(TotalaDevolver, dinero);
    mostrarCambios(dinero, cambio)
})


