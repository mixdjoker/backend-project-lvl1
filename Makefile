install:
	npm install
	sudo npm link

uninstall:
	sudo npm rm --global backend-project-lvl1

start:
	@node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	@npx eslint .
