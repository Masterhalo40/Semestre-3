export default class Diferencia{
    constructor(div) {
        this._div = div;
        this._trabajadoHora = 0;
        this._trabajadoMinutos = 0;
        this._trabajadoSegundos = 0;
    }

    imprimirTrabajado(tiempo) {
        this._trabajadoHora = (tiempo.hora2 - tiempo.hora);
        this._trabajadoMinutos = (tiempo.minutos2 - tiempo.minutos);
        this._trabajadoSegundos = (tiempo.segundos2 - tiempo.segundos);


        this._div.textContent = `El total de horas trabajadas durante el día fuereon de ${this._trabajadoHora} horas, ${this._trabajadoMinutos} minutos y ${this._trabajadoSegundos} segundos.`;
    }
} 