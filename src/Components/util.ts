const parseMathExpression = (expression: string): (number | string)[] => {
    const matches = expression.match(/(\d+|\D)/g) ?? [];
    return matches.map((item: string) => (/\d/.test(item) ? Number(item) : item));
}


const calculationCase = (operator: string | number) => {
    switch (operator) {
        case '+':
            return (x: number, y: number) => x + y;

        case '-':
            return (x: number, y: number) => x - y;

        case '/':
            return (x: number, y: number) => x / y;

        case '*':
            return (x: number, y: number) => x * y;

        case '^':
            return (x: number, y: number) => Math.pow(x, y);

        default:
            return null;
    }
};

export const Calculate = (equation: string, x: number) => {
    const equationArray = parseMathExpression(equation);
    let result: number = 0;

    let executeMethod: ((x: number, y: number) => number) | null = null;

    for (let i = 0; i < equationArray.length; i++) {
        if (equationArray[i] === 'x') {
            result = executeMethod ? executeMethod(result, x) : x;
            continue;
        }
        if (isNaN(+equationArray[i])) {
            executeMethod = calculationCase(equationArray[i]);
            continue;
        }
        if (executeMethod === null) {
            result = +equationArray[i];
        }
        result = executeMethod?.(result, +equationArray[i]) || result;
        executeMethod = null;
    }
    return result;
};

