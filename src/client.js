var http = require("http");

exports.sendRequest = function(callback) {
  var options = {
    hostname: "abcd",
    port: 80,
    path: "/",
    method: "GET"
  };

  var req = http.request(options, function(res) {
    res.setEncoding("utf-8");
    res.on("data", function(err, data) {
      callback();
    });
  });

  req.end();
};
