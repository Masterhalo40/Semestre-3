export default class Trabajador {
    constructor(hora, minutos, segundos, hora2, minutos2, segundos2) {
        this._hora = hora;
        this._minutos = minutos;
        this._segundos = segundos;
        this._hora2 = hora2;
        this._minutos2 = minutos2;
        this._segundos2 = segundos2;
    }

    get hora() {
        return this._hora;
    }

    get minutos() {
        return this._minutos;
    }

    get segundos() {
        return this._segundos;
    }

    get hora2() {
        return this._hora2;
    }

    get minutos2() {
        return this._minutos2;
    }

    get segundos2() {
        return this._segundos2;
    }
}