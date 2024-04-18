//Задание 7.7.3

const users = [
    user1 = {
        name: 'Ivan',
        age: 26,
    },
    user2 = {
        name: 'Liza',
        age: 16,
    },
    user3 = {
        name: 'Dima',
        age: 20,
    }
];
const up = users.filter(function(users) {
    return users.age > 18;
})

const usersName = users.map((users) => {
    return users.name;
}
)
console.log(up)
console.log(usersName)