const parseExpression = (expression: string): (number | string)[] => {
    const tokens = expression.match(/(\d+|\D)/g) ?? [];
    return tokens.map((token: string) => (/\d/.test(token) ? Number(token) : token));
}

const operatorFunctions = {
    '+': (a: number, b: number) => a + b,
    '-': (a: number, b: number) => a - b,
    '/': (a: number, b: number) => a / b,
    '*': (a: number, b: number) => a * b,
    '^': (a: number, b: number) => Math.pow(a, b),
} as const;

type Operator = keyof typeof operatorFunctions;

export const Calculate = (equation: string, x: number): number => {
    const parsedTokens = parseExpression(equation);
    let currentResult: number | null = null;

    let currentOperator: Operator = '*';

    for (let i = 0; i < parsedTokens.length; i++) {
        if (parsedTokens[i] === 'x') {
            currentResult = currentResult !== null ? operatorFunctions[currentOperator](currentResult, x) : x;
            continue;
        }
        if (isNaN(+parsedTokens[i])) {
            currentOperator = parsedTokens[i] as Operator;
            continue;
        }
        if (currentResult === null) {
            currentResult = +parsedTokens[i];
        } else {
            currentResult = operatorFunctions[currentOperator](currentResult, +parsedTokens[i]);
        }
        currentOperator = '*';
    }
    return currentResult || 0;
};

// Valid equation
export const isValidEquation = (equation: string): boolean => {
    const validEquationRegex = /^[0-9x+\-*/^().\s]+$/;

    return validEquationRegex.test(equation);
};

export const calculateWidth = (base: number, currentRef: string) =>
    currentRef.length > 4
        ? `${(currentRef.length - 4) * 10 + base}px`
        : `${base}px`;