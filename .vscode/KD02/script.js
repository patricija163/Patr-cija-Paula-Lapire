//Uzdevums 1

let vards = "Guntis";
let vecums = 25;
let irPilsonis = true;

console.log("Vārds: " + vards);
console.log("Vecums: " + vecums);

if (vecums >= 18 && irPilsonis) {
    console.log("Drīkst balsot.");
} else if (vecums >= 18 && !irPilsonis) {
    console.log("Personai ir 18 gadi, bet viņa nav pilsonis.");
} else if (vecums < 18 && irPilsonis) {
    console.log("Personai nav 18 gadi, bet viņa ir pilsonis.");
} else {
    console.log("Personai nav 18 gadi un viņa nav pilsonis.");
}

// Uzdevums 2
let atzime = prompt("Ievadiet atzīmi (0-100):");

if (atzime >= 90) {
    console.log("Izcili");
} else if (atzime >= 70) {
    console.log("Labi");
} else if (atzime >= 50) {
    console.log("Vidēji");
} else {
    console.log("Slikti");
}

// Uzdevums 3
let saraksts = [];
saraksts.push(10, 20, 30, 40, 50);

console.log("Saraksts:");
for (let i = 0; i < saraksts.length; i++) {
    console.log(saraksts[i]);
}

// Uzdevums 4
console.log("Saraksts apgrieztā secībā:");
for (let i = saraksts.length - 1; i >= 0; i--) {
    console.log(saraksts[i]);
}

