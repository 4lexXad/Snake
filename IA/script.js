
function createBrain(cost) {
    let brain = new Brain(setNeurons(INPUT), setNeurons(OUTPUT), setHidden(HIDDEN));
    brain.genome = setGenome(brain.neurons.input, brain.neurons.output, brain.neurons.hidden, cost);

    return brain;
}

function setGenome(inputs, outputs, hiddens, cost) {
    let Genome = []

    inputs.forEach(input => {
        hiddens.forEach(hidden => {
            hidden.forEach(h1 => {
                if (Math.random() < cost) Genome.push(new Gene(input, h1, randomIa(16, 0), cost));

                hidden.forEach(h2 => {
                    if (h1 == h2 && h1.id < h2.id) return;
                    if (Math.random() < cost) Genome.push(new Gene(h1, h2, randomIa(16, 0), cost));
                })

                outputs.forEach(output => {
                    if (Math.random() < cost) Genome.push(new Gene(h1, output, randomIa(16, 0), cost));
                })

            })
        })
    })

    return Genome;
}

function randomIa(max, min) {
    return Math.trunc(Math.random() * max + min);
}


function setNeurons(neurons) {
    let n = []

    neurons.forEach(neuron => {
        n.push(new Neuron(neuron))
    });

    return n;
}

function setHidden(neurons) {
    let n = []
    let h = []

    neurons.forEach(neuron => {
        h = []
        for (let i = 0; i < neuron; i++) {
            h.push(new Neuron(n.length))    
        }
        n.push(h)
    })

    return n;
}