function checkAge() {
    let age = Number(prompt("Введіть ваш вік:"));

    if (age < 18) {
        alert("Вам заборонено вхід");
    } else if (age <= 65) {
        alert("Ласкаво просимо!");
    } else {
        alert("Будь ласка, будьте обережні!");
    }
}

function evenNumbers() {
    let n = Number(prompt("Введіть число n:"));
    console.clear();
    for (let i = 2; i <= n; i++) {
        if (i % 2 === 0) console.log(i);
    }
}

function factorial() {
    let num = Number(prompt("Введіть число:"));
    let result = 1;
    let i = 1;

    while (i <= num) {
        result *= i;
        i++;
    }

    console.log("Факторіал:", result);
}

function calculator() {
    let a = Number(prompt("Перше число:"));
    let b = Number(prompt("Друге число:"));
    let op = prompt("Операція (+, -, *, /):");

    let res;

    switch (op) {
        case "+": res = a + b; break;
        case "-": res = a - b; break;
        case "*": res = a * b; break;
        case "/": res = b !== 0 ? a / b : "Ділення на 0 неможливе"; break;
        default: res = "Помилка";
    }

    alert(res);
}

function guessNumber() {
    let secret = Math.floor(Math.random() * 100) + 1;
    let guess;

    do {
        guess = Number(prompt("Вгадайте число (1-100):"));

        if (guess < secret) alert("Більше");
        else if (guess > secret) alert("Менше");
        else alert("Вгадав!");

    } while (guess !== secret);
}

function gcd() {
    let x = Number(prompt("Перше число:"));
    let y = Number(prompt("Друге число:"));

    while (y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
    }

    console.log("НСД:", x);
}
