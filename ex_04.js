function updateLicensePlates(agent, plates) {
    agent.car = agent.car || {};
    agent.car.licensePlates = plates;
    return agent;
}

function showLicensePlates(agent) {
    const platesContainer = document.querySelector('.plates-container');
    platesContainer.innerHTML = '';

    agent.car.licensePlates.forEach(plate => {
        const li = document.createElement('li');
        li.textContent = plate;
        platesContainer.appendChild(li);
    });
}

let agent = {
    age: 57,
    code: "007",
    firstName: "James",
    lastName: "Bond",
    car: {}
};

updateLicensePlates(agent, ["LU 6789", "4711-EA-62", "BMT 216A"]);
showLicensePlates(agent);
