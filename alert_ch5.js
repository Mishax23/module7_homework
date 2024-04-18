//Задание 7.7.5

function sortAsc(arr) {
    return arr.sort((a, b) => a - b);
};
function unique(arr) {
    return arr.filter((item, index) => 
    arr.indexOf(item) === index);
};
function uniqueSorted(arr) {
    return sortAsc(unique(arr));
};

const arr = [2, 1, 3, 3, 5, 9, 1, 4, 3, 5, 5,];
const uniqueSortedArr = uniqueSorted(arr);
console.log(uniqueSortedArr);