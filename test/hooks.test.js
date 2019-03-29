var assert = require("assert");
describe("hook test suite", function() {
  before("before", function() {
    console.log("run before...");
  });

  after("afer", function() {
    console.log("run after...");
  });

  beforeEach("beforeEach", function() {
    console.log("run beforeEach...");
  });

  afterEach("afterEach", function() {
    console.log("run afterEach...");
  });

  describe("first suite", function() {
    it("should return -1 when the value is not present", function() {
      assert.equal([1, 2, 3].indexOf(5), -1);
    });
  });
});
