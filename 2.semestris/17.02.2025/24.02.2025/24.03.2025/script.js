// 3.uzdevums 
let a = 10;
let b = 5;

// 4.uzdevums
let summa= a + b;
let starpība= a - b;
let reizinājums= a * b;
let dalījums=a / b;

//4.1 
console.log("Summa:" +(a + b));
console.log("Starpība:" +(a - b));
console.log("Reizinājums:" +(a * b));
console.log("Dalījums:" +(a / b));

//5.uzdevums
if (a > b) {
    console.log("a ir lielāks par b");
} else if (a == b) {
    console.log("a ir vienāds ar b");
} else {
    console.log("b ir lielāks par a");
}

//6.uzdevums
switch (true) {
    case (a > b):
        console.log("a ir lielāks par b");
        break;
    case (a == b):
        console.log("a ir vienāds ar b");
        break;
    default:
        console.log("b ir lielāks par a");
}

// 7.uzdevums
let masivs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 8.uzdevums
for (let i = 0; i < masivs.length; i++) {
    console.log(masivs[i]);
}
//9.uzdevums
for (let i = masivs.length - 1; i >= 0; i--) {
    console.log(masivs[i]);
}



