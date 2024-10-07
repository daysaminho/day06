const car = {
    color: "grey",
    model: "DB5",
    brand: "Aston Martin",
    logInfo: function() {
        console.log(`Car information: ${this.color}, ${this.model}, ${this.brand}`);
    }
};

const agent = {
    firstName: "James",
    lastName: "Bond",
    code: "007",
    age: 57,
    car: car,
    logInfo: function() {
        console.log(`Agent information: ${this.firstName} ${this.lastName}, ${this.code}, ${this.age}`);
        this.car.logInfo(); 
    }
};


agent.logInfo();
car.logInfo();
