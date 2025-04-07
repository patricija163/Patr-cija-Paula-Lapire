// Uzdevums 5
let num1 = parseFloat(prompt("Ievadiet pirmo skaitli:"));
let num2 = parseFloat(prompt("Ievadiet otro skaitli:"));
let operators = prompt("Ievadiet operatoru (+, -, *, /):");

if (!isNaN(num1) && !isNaN(num2)) {
    let rezultats;
    switch (operators) {
        case "+":
            rezultats = num1 + num2;
            break;
        case "-":
            rezultats = num1 - num2;
            break;
        case "*":
            rezultats = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                rezultats = num1 / num2;
            } else {
                rezultats = "Dalīšana ar nulli nav atļauta.";
            }
            break;
        default:
            rezultats = "Nepazīstams operators.";
    }
    document.body.innerHTML += `<h3>Rezultāts: ${rezultats}</h3>`;
} else {
    document.body.innerHTML += `<h3>Lūdzu ievadiet derīgus skaitļus.</h3>`;
}