TESTS = test/*.js
REPORTER = mochawesome
TIMEOUT = 10000
MOCHA_OPS = 
COVERAGE_TEST = 

test:
	@NODE_ENV=test $(COVERAGE_TEST) ./node_modules/mocha/bin/mocha \
		--reporter $(REPORTER) \
		--timeout $(TIMEOUT) \
		$(MOCHA_OPS) \
		$(TESTS)

test-cov:
	@$(MAKE) test COVERAGE_TEST=./node_modules/nyc/bin/nyc.js

test-all: test test-cov

.PHONY: test