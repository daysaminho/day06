const agent = {
    firstName: "James",
    lastName: "Bond",
    code: "007",
    age: 57,
    car: {
        color: "grey",
        model: "DB5",
        brand: "Aston Martin"
    },
    isMatching: function(key, value) {
        return this.car[key] === value;
    }
};

function searchCars(agents, key, value) {
    return agents
        .filter(agent => agent.isMatching(key, value))
        .map(agent => agent.car);
}

const matchingCars = searchCars([agent], 'color', 'grey');
console.log(matchingCars);
