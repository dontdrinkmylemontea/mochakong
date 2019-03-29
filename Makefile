TESTS = test/*.js
REPORTER = mochawesome
TIMEOUT = 10000
MOCHA_OPS = 

test:
	@NODE_ENV=test ./node_modules/mocha/bin/mocha \
		--reporter $(REPORTER) \
		--timeout $(TIMEOUT) \
		$(MOCHA_OPS) \
		$(TESTS)

test-cov:
	@$(MAKE) test 

test-all: test test-cov

.PHONY: test