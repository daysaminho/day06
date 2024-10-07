function addCarToAgent(agent, brand, model, color, power) {
   
   
    if (typeof brand !== 'string' || typeof model !== 'string' || 
        typeof color !== 'string' || typeof power !== 'string') {
        console.error("Error");
        return null;
    }
   
   
    if (typeof agent !== 'object' || agent === null) {
        console.error("Error");
        return null;
    }
    
    
    agent.car = {
        brand: brand,
        model: model,
        color: color,
        power: power
    };
    
    shareThatBeauty(agent);
    
    return agent;
}

let agent = {
    age: 57,
    code: "007",
    firstName: "James",
    lastName: "Bond"
};

addCarToAgent(agent, "Aston Martin", "DB5", "argent", "300 ch")

