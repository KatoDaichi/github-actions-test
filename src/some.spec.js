const some = require("./some");

test("some test", () => {
  const result = some();
  expect(result).toBe("some");
});
