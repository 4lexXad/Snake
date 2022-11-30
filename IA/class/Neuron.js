class Neuron {
    constructor (id) {
        this.id = id;
        this.inputs = [];
        this.value = 0;
    }

    setInput (value) {
        if (this.value) this.value = 0;
        this.inputs.push(value)
    }

    setValue() {
        for (let i = 0; i < this.inputs.length; i++) this.value += this.inputs[i];
        this.inputs = [];
    }
}