import Trabajador from "./trabajador.js";
import Diferencia from "./diferencia.js";

class Main {
    constructor() {
        let diferencia = new Diferencia(document.querySelector("#cambio"));

        document.querySelector("#btnCalcular").addEventListener("click", () => {
            let hora = document.querySelector("#hora").value;
            let minutos = document.querySelector("#minutos").value;
            let segundos = document.querySelector("#segundos").value;
            let hora2 = document.querySelector("#hora2").value;
            let minutos2 = document.querySelector("#minutos2").value;
            let segundos2 = document.querySelector("#segundos2").value;
            let tiempo = new Trabajador(hora, minutos, segundos, hora2, minutos2, segundos2);

            diferencia.imprimirTrabajado(tiempo);
            });
    }
}

let m = new Main();