var http = require("http");

exports.sendRequest = function(callback) {
  var options = {
    hostname: "127.0.0.1",
    port: 3000,
    path: "/",
    method: "GET"
  };

  var req = http.request(options, function(res) {
    res.setEncoding("utf-8");
    res.on("data", function(err, data) {
      callback(err, data);
    });
  });

  req.end();
};
