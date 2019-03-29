var sendRequest = require("../src/client").sendRequest;
var http = require("http");

describe("#client", function() {
  var _request;
  beforeEach(function() {
    _request = http.request;
    http.request = function(options, callback) {
      callback({
        setEncoding: function() {},
        on: function(eventName, callback) {
          callback(null, "hello.");
        }
      });

      return {
        end: function() {
          return;
        }
      };
    };
  });

  afterEach(function() {
    http.request = _request;
  });

  it("should return no error", function(done) {
    sendRequest(function(error, data) {
      done(error);
    });
  });
});
