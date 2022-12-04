export class Variable {
    constructor (x) {
        this._value = x;
    }

    /**
     * La función se llama cuando se asigna un valor a la propiedad.
     * @param value - El valor de la propiedad.
     */
    set value (x) {
        this._value = x;
    }

    get value () {
        return this._value;
    }
}