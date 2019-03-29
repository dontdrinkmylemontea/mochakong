var Benchmark = require("benchmark");
var suite = new Benchmark.Suite();
var bubble = require("../src/bubble").bubble;
var fastsort = require("../src/fast").fastsort;

describe.only("#benchmark", function() {
  var arr = [10, 3, 9, 8, 11, 13, 4];
  suite
    .add("fastsort", function() {
      fastsort(arr);
    })
    .add("bubble", function() {
      bubble(arr);
    })
    .on("cycle", function(event) {
      console.log(String(event.target));
    })
    .on("complete", function() {
      console.log("Fastest is " + this.filter("fastest").map("name"));
    })
    .run();
});
