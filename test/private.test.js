var rewire = require("rewire");
var assert = require("assert");

describe("private", function() {
  it("isFirstNagative should return true", function() {
    var isFirstNagative = rewire("../src/private.js").__get__(
      "isFirstNagative"
    );
    assert.ok(isFirstNagative([-1, 1]));
  });
});
