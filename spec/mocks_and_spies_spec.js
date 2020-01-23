let Calculator = require("../src/mocks_and_spies");

let calculator = new Calculator();

describe("Calculator mock and spy test", () => {
    it("should show that add() function have been called", () => {
        spyOn(calculator, "add");

        calculator.add(1, 2, 3);

        expect(calculator.add).toHaveBeenCalled();
    });

    it("should show that multiply() function have been called", () => {
        spyOn(calculator, "multiply");

        calculator.multiply(1, 2, 3);

        expect(calculator.multiply).toHaveBeenCalled();
    });

    it("should show that add() function have been called 2 times", () => {
        spyOn(calculator, "add");

        calculator.add(1, 2, 3);
        calculator.add(4, 5, 6);

        expect(calculator.add).toHaveBeenCalledTimes(2);
    });
    it("should show that multiply() function have been called 2 times", () => {
        spyOn(calculator, "multiply");

        calculator.multiply(9, 5, 3);
        calculator.multiply(2, 9, 6);

        expect(calculator.multiply).toHaveBeenCalledTimes(2);
    });

    it("should show that add() function have been called with arguements", () => {
        spyOn(calculator, "add");

        calculator.add(1, 2, 3);

        expect(calculator.add).toHaveBeenCalledWith(1, 2, 3);
    });

    it("should show that multiply() function have been called with arguement", () => {
        spyOn(calculator, "multiply");

        calculator.multiply(7, 5, 4);

        expect(calculator.multiply).toHaveBeenCalledWith(7, 5, 4);
    });
});
