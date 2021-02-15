let abc = ["ant", "bat", "cat", 42];
abc.forEach(element => {
    console.log(element);
});

let a = [8, 17, 42, 99];
console.log(a.reverse())
a.sort(function (a, b) { 
    return a - b; });
a.forEach(function (element) {
    console.log(element);
});
