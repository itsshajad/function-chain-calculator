const parseMathExpression = (expression: string): (number | string)[] => {
    const matches = expression.match(/(\d+|\D)/g) ?? [];
    return matches.map((item: string) => (/\d/.test(item) ? Number(item) : item));
}


const operations: Record<string, (a: number, b: number) => number> = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '/': (a, b) => a / b,
    '*': (a, b) => a * b,
    '^': (a, b) => Math.pow(a, b),
};

export const Calculate = (equation: string, x: number) => {
    const equationArray = parseMathExpression(equation);
    let result: number = 0;

    let operator: ((a: number, b: number) => number) | null = null;

    for (const item of equationArray) {
        if (item === 'x') {
            result = operator ? operator(result, x) : x;
        }
        else if (typeof item === 'string' && item in operations) {
            operator = operations[item];
        }
        else {
            result = operator ? operator(result, Number(item)) : Number(result);
            operator = null;
        }
    }
    return result;
};


// Valid equation
export const isValidEquation = (equation: string): boolean => {
    const validEquationRegex = /^[0-9x+\-*/^().\s]+$/;

    return validEquationRegex.test(equation);
};
