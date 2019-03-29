var Benchmark = require("benchmark");
var suite = new Benchmark.Suite();
var bubble = require("../src/bubble").bubble;
var fast = require("../src/fast").fast;

describe.only("#benchmark", function() {
  var arr = [10, 3, 9, 8, 11, 13, 4];
  suite
    .add("fast", function() {
      return fast(arr);
    })
    .add("bubble", function() {
      return bubble(arr);
    })
    .on("cycle", function(event) {
      console.log(String(event.target));
    })
    .on("complete", function() {
      // console.log("Fastest is " + this.filter("fastest").pluck("name"));
    })
    .run();
});
