const Exercises = require('./code');

describe('Exercises Class Tests', () => {

    const exerciseInstance = new Exercises();

    test('isEven method should return truthy for even numbers and falsy for odd numbers', () => {
        expect(exerciseInstance.isEven(2)).toBeTruthy();
        expect(exerciseInstance.isEven(1)).toBeFalsy();
        expect(exerciseInstance.isEven()).toBeFalsy();
        expect(exerciseInstance.isEven("a")).toBeFalsy();
    });

    test('removeAtLeastOne method should return an array shorter than the original array', () => {
        expect(exerciseInstance.removeAtLeastOne([1, 2, 3]).length).toBeLessThan(3);
        expect(exerciseInstance.removeAtLeastOne([1]).length).toBeLessThan(1);
        expect(exerciseInstance.removeAtLeastOne([]).length).toEqual(0);
    });

    test('simplify method should remove special symbols from the string', () => {
        expect(exerciseInstance.simplify("aa!#.,'b")).toEqual("aab");
        expect(exerciseInstance.simplify("aa!*")).toEqual("aa*");
        expect(exerciseInstance.simplify("aa#")).toEqual("aa");
        expect(exerciseInstance.simplify("a.c")).toEqual("ac");
        expect(exerciseInstance.simplify("")).toEqual("");
    });

    test('simplify method should remove special symbols from the string', () => {
        const arrNotBoolean = [1, 2, 3];
        const arrTrue = [true, true, false];
        const arrFalse = [true, true, false, false, false];
        const arrSame = [true, false];
        const arrEmpty = [];

        expect(exerciseInstance.validate(arrEmpty)).toEqual({ "error": "Need at least one boolean" });
        expect(exerciseInstance.validate(arrNotBoolean)).toEqual({ "error": "Need at least one boolean" });
        expect(exerciseInstance.validate(arrTrue)).toBeTruthy();
        expect(exerciseInstance.validate(arrFalse)).toBeFalsy();
        expect(exerciseInstance.validate(arrSame)).toBeFalsy();
    });

    test('add method should push the provided arguments into the array', () => {
        const pushSpy = jest.spyOn(Array.prototype, 'push');
        exerciseInstance.add(2, 3); 
        expect(pushSpy).toHaveBeenCalledWith(2, 3);
        pushSpy.mockRestore();
    });

});
