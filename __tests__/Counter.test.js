import { Counter } from '../src/js/counter.js';

describe('Counter', () => {

  test('should set money property to an amout passed in.', () => {
    const counter = new Counter(4.99);
    expect(counter.money).toEqual(4.99);
  });

  test('should find the amount of quarters for the inputted amount', () => {
    const counter = new Counter(4.99);
    counter.makeChange();
    expect(counter.quarters).toEqual(19);
  });

  test('should find the amount of dimes for the inputted amount', () => {
    const counter = new Counter(4.99);
    counter.makeChange();
    expect(counter.dimes).toEqual(2);
  });

  test('should find the amount of nickles for the inputted amount', () => {
    const counter = new Counter(4.99);
    counter.makeChange();
    expect(counter.nickles).toEqual(0);
  });

  test('should find the amount of pennies for the inputted amount', () => {
    const counter = new Counter(4.99);
    counter.makeChange();
    expect(counter.pennies).toEqual(4);
  });

  test('should return false if the input is not a number', () => {
    const counter = new Counter("string");
    expect(counter.makeChange()).toEqual(false);
  });

  test('should return false if the input is less than 0', () => {
    const counter = new Counter(-1);
    expect(counter.makeChange()).toEqual(false);
  });

  test('should return amount of quartes and the remain in cents', () => {
    const counter = new Counter(4.99);
    expect(counter.makeChangeClosure("Quarters")(counter.money)).toEqual("19 Quarters and 24 cents.");
  });

  test('should return amount of dimes and the remain in cents', () => {
    const counter = new Counter(4.99);
    expect(counter.makeChangeClosure("Dimes")(counter.money)).toEqual("49 Dimes and 9 cents.");
  });

});