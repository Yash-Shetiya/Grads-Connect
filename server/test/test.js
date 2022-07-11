const assert = require("assert");

describe("Demo Test", () => {
  before(() => {
    console.log("This part Execute once before all tests");
  });
  after(() => {
    console.log("This part Execute once after all tests");
  });
});

describe("Test1", () => {
  beforeEach(() => {
    console.log("executes before every test");
  });
  it("Is returing 5 when adding 2 + 3 ", () => {
    assert.equal(2 + 3, 5);
  });
});
