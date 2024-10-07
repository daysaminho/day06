function displayAgentInfo(obj) {
    let age = obj.age;
    let code = obj.code;
    let firstName = obj.firstName;
    let lastName = obj.lastName;

    let phrase = `MY NAME IS ${obj.lastName}, ${obj.firstName} ${obj.lastName} ! I'M THE AGENT ${obj.code} AND I'M ${obj.age} YEARS OLD.`

    let p = document.querySelector('#container p'); 
    p.textContent = phrase; 


}


let agent = {
age : 57,
code : "007",
firstName : "James",
lastName : "Bond"


}


document.addEventListener('DOMContentLoaded', function() {
    displayAgentInfo(agent);
});
