m-wiki.zip: *.json *.js img/* *.md
	zip -r m-wiki.zip * -x .git/* -x img/preview.png -x img/icon.psd -x .gitignore -x Makefile

clean:
	rm *.zip
