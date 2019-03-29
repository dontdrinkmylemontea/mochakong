var assert = require("assert");
var bubble = require("../src/bubble").bubble;

describe("bubble", function() {
  var arr = [10, 5, 3, 7, 4];

  it("should return array", function() {
    assert.equal(Array.isArray(bubble(arr)), true);
  });

  it("should be sorted", function() {
    assert.deepEqual(bubble(arr), [3, 4, 5, 7, 10]);
  });
});
