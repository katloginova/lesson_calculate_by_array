function getOperator() {
    let sign = '';

    do {
        sign = prompt('Enter the operator');
    } while (!isOperatorValid(sign));

    return sign;
}

function isOperatorValid(sign) {
    return (
        (sign === '+') ||
        (sign === '-') ||
        (sign === '*') ||
        (sign === '/')
    );
}

function getArrayOperands() {
    let answer = '';

    do {
        answer = prompt(`Enter the operands separated by commas`);
    } while (!isOperandsValid(answer));

    return answer.split(',');
}

function isOperandsValid(str) {
    return (str !== null && str !== '');
}

function getResultOperation(arrayOperands, sign) {
    const operands = deleteNotNumber(arrayOperands);
    let operand = 0;
    let result = 0;
    let expression = '';

    for (let i = 0; i < operands.length; i++) {
        operand = Number(operands[i]);

        if (i === 0) {
            result = operand;
            expression = operand;
            continue;
        }

        result = calculate(sign, result, operand);
        expression = operands.join(` ${sign} `);
    }

    return `${expression} = ${result}`;
}

function deleteNotNumber(arrayOperands) {
    for (let i = 0; i < arrayOperands.length; i++) {
        if (isNumberInvalid(arrayOperands[i])) {
            arrayOperands.splice(i, 1);
            i--;
        }
    }

    return arrayOperands;
}

function isNumberInvalid(num) {
    return(isNaN(num) || num === '');
}

function calculate(sign, a, b) {
    switch (sign) {
        case '+':
            return (a + b);
        case '-':
            return (a - b);
        case '*':
            return (a * b);
        case '/':
            return (a / b).toFixed(3);
    }
}

const operator = getOperator();
const operands = getArrayOperands();
const resultOperation = getResultOperation(operands, operator);

console.log(resultOperation);