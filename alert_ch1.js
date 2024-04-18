//Задание 7.7.1

function printInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
};

const person = {
    name: 'Иван',
    age: 34,
};

printInfo.call(person);