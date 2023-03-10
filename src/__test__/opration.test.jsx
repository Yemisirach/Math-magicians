import operate from "../logic/Operate";

describe("operate", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(operate("1", "2", "+")).toBe("3");
  });

  test("substract 2 - 1 to equal 1", () => {
    expect(operate("2", "1", "-")).toBe("1");
  });
  test("4 / 2 to equal 2", () => {
    expect(operate("4", "2", "÷")).toBe("2");
  });
  test("4 x 2 to equal 8", () => {
    expect(operate("4", "2", "x")).toBe("8");
  });
  test("4 % 2 to equal 0", () => {
    expect(operate("4", "2", "%")).toBe("0");
  });
});
