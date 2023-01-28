function performOperation(operation) {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let result;

    switch (operation) {
        case 'add':
            result = parseFloat(input1) + parseFloat(input2);
            break;
        case 'subtract':
            result = parseFloat(input1) + parseFloat(input2);
            break;
        case 'multiply':
            result = parseFloat(input1) + parseFloat(input2);
            break;
        case 'divide':
            result = parseFloat(input1) + parseFloat(input2);
            break;

    }
    document.getElementById("result").innerHTML = result;
}