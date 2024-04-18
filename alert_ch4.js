//Задание 7.7.4
const person = {
    name: 'Ivan Seleznev'
}

function setFullName(obj, name) {
     obj.fullName = name; 
} 
const setPersonFullName = setFullName.bind(null, person) ; 
setPersonFullName('John Smith');
console.log(person.fullName);