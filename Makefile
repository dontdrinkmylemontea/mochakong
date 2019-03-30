TESTS = test/*.js
REPORTER = mochawesome
TIMEOUT = 10000
MOCHA_OPS = 
COVERAGE_TEST = 
SERVER = 127.0.0.1:3000
CONCURENT = 10000
REPS = 100


test:
	@NODE_ENV=test $(COVERAGE_TEST) ./node_modules/mocha/bin/mocha \
		--reporter $(REPORTER) \
		--timeout $(TIMEOUT) \
		$(MOCHA_OPS) \
		$(TESTS)

test-cov:
	@$(MAKE) test COVERAGE_TEST=./node_modules/nyc/bin/nyc.js

test-ben:
	@NODE_ENV=test node ./test/benchmark.test.js

server:
	node ./src/server.js

test-pre:
	siege -c $(CONCURENT) -r $(REPS) $(SERVER)

clean:
	rm -rf .nyc_output mochawesome-report

test-all: test test-cov

.PHONY: test