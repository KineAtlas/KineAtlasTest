document.getElementById("buscador").addEventListener("input", function () {
    let filtro = this.value.toLowerCase().split(" ");
    let filas = document.querySelectorAll("#tabla-musculos tr");

    filas.forEach(fila => {
        let textoFila = fila.innerText.toLowerCase();
        let coincide = filtro.every(palabra => textoFila.includes(palabra));

        if (coincide) {
            fila.style.display = "";
        } else {
            fila.style.display = "none";
        }
    });
});




function cambiarColorFondo() {
    let body = document.body;
    let colorActual = getComputedStyle(body).backgroundColor;

    if (colorActual === "rgb(0, 0, 0)") { // Si es negro
        body.style.backgroundColor = "white";
        localStorage.setItem("modoOscuro", "false");
    } else {
        body.style.backgroundColor = "black";
        localStorage.setItem("modoOscuro", "true");
    }
}





