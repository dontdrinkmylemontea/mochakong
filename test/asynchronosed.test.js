var assert = require("assert");

describe("test asynchronosed function", function() {
  it("should wait until callback is involked.", function(done) {
    setTimeout(function() {
      assert.ok(true);
      done();
    }, 1000);
  });
});
