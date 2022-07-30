function subtract(a, b) {
    return a - b;
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

alert(
    "Welcome to the calculator app!\n\nThis app will help you calculate your math problems."
);

alert(
    "Which operation would you like to perform?\n\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division"
);

while (true) {

    let choice = prompt("\nEnter your choice : ");
    let choices = ["1", "2", "3", "4"];


    if (choices.includes(choice)) {
        let a = parseInt(prompt("Enter first number: "));
        let b = parseInt(prompt("Enter second number: "));

        switch (choice) {
            case "1":
                alert(`${a} + ${b} = ${add(a, b)}`);
                break;
            case "2":
                alert(`${a} - ${b} = ${subtract(a, b)}`);
                break;
            case "3":
                alert(`${a} x ${b} = ${multiply(a, b)}`);
                break;
            case "4":
                alert(`${a} / ${b} = ${divide(a, b)}`);
                break;
        }
    } else {
        alert("Invalid choice. Please try again.");
    }
    break;
}