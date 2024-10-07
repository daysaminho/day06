function AddCar(agentString, car) {

    let agent = JSON.parse(agentString)

    agent.car = car; 

return agent;

}



let agentString = '{"age": 57, "code": "007", "firstName": "James", "lastName": "Bond"}';
let carBrand = "Aston Martin";

let updatedAgent = AddCar(agentString, carBrand);

console.log(updatedAgent);
