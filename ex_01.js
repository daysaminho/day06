function displayAgentInfo(obj) {
    let age = obj.age;
    let code = obj.code;
    let firstName = obj.firstName;
    let lastName = obj.lastName;

    let phrase = `MY NAME IS ${obj.lastName}, ${firstName} ${lastName} ! I'M THE AGENT ${code} AND I'M ${age} YEARS OLD.`

    let p = document.querySelector('#container p'); 
    p.textContent = phrase; 


}


let agent = {
age : 57,
code : "007",
firstName : "James",
lastName : "Bond"


}


document.addEventListener('DOMContentLoaded', () => {
    displayAgentInfo(agent);
});
