let limit = 15;

class Gene {
    constructor (neuron1, neuron2, weight, cost) {
        this.n1 = neuron1;
        this.n2 = neuron2;

        this.weight = weight;

        this.setWeight(cost);
    }

    setWeight (cost) {
        if (Math.random() < cost) {
            if (this.weight > limit) this.weight = 0;
            else this.weight += 1;
        }
    }

    calculate () {
        this.n2.setInput(this.n1.setValue() * this.weight);
    }
}
