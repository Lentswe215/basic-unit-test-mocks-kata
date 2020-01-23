class Calculator {
    
    add = function () {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i];
        }
        return sum;
    };

    multiply = function () {
        let result = 1;
        for (let i = 0; i < arguments.length; i++) {
            result = result * arguments[i];
        }
        return result;
    };
}

module.exports = Calculator;
