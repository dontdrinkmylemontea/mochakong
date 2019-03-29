TESTS = test/*.js
REPORTER = spec
TIMEOUT = 10000
MOCHA_OPS = 

test:
	@NODE_ENV=test ./node_modules/mocha/bin/mocha \
		--reporter $(REPORTER) \
		--timeout $(TIMEOUT) \
		$(MOCHA_OPS) \
		$(TESTS)

test-cov:
	@$(MAKE) test MOCHA_OPS='--require blanket' REPORTER=html-cov > coverage.html

test-all: test test-cov

.PHONY: test