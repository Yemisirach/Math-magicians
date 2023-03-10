import calculate from "../logic/Calculate";

const obj = { total: "1", next: "2", operation: "+" };
test("test calculator for the buttons functionality", () => {
  expect(calculate(obj, "=")).toEqual({
    total: "3",
    next: null,
    operation: null,
  });
  expect(calculate(obj, "AC")).toEqual({
    total: null,
    next: null,
    operation: null,
  });
  expect(calculate(obj, "+/-")).toEqual({
    total: "1",
    next: "-2",
    operation: "+",
  });
});

test("test operators for the right return", () => {
  expect(calculate({ ...obj, operation: "+" }, "=").total).toBe("3");
  expect(calculate({ ...obj, operation: "-" }, "").total).toBe("-1");
  expect(calculate({ ...obj, operation: "x" }, "=").total).toBe("2");
  expect(calculate({ ...obj, operation: "÷" }, "=").total).toBe("0.5");
  expect(calculate({ ...obj, operation: "%" }, "=").total).toBe("1");
});

describe("Make multiple calculations", () => {
  let obj = {
    total: null,
    next: null,
    operation: null,
  };

  test("Test multiple operations", () => {
    const buttons = ["2", "+", "2", "x", "6", "÷", "3", "="];
    buttons.forEach((button) => {
      obj = { ...obj, ...calculate(obj, button) };
    });
    const { total } = obj;
    expect(total).toEqual("8");
  });

  test("Test multiple operations with two digits numbers", () => {
    const buttons = ["2", "0", "+", "1", "0", "÷", "3", "="];
    buttons.forEach((button) => {
      obj = { ...obj, ...calculate(obj, button) };
    });
    const { total } = obj;
    expect(total).toEqual("10");
  });
});
