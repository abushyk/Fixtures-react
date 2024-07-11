let arr = [];
arr[1] = 3;
arr[3] = 5;
arr.push({});


let filtered = arr.filter(function (el) {
    return el != null;
});

console.log(filtered);