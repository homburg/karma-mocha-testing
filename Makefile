.PHONY: start install clean

NPM_BIN = $(shell npm bin karma)
KARMA = $(NPM_BIN)/karma
BOWER = $(NPM_BIN)/bower

.SUFFIXES:

start: install
	$(KARMA) start

install: node_modules bower_components

node_modules:
	npm install

bower_components:
	$(BOWER) install

clean:
	rm -rf bower_components/ node_modules/
