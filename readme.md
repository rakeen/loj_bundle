LOJ Bundle
==========
[![wtfpl](http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png)](http://www.wtfpl.net/txt/copying/)
[![version](https://img.shields.io/badge/version-0.1-green.svg)]()
[![npm](https://img.shields.io/npm/v/npm.svg?maxAge=2592000)]()

<br><br>

All [Lightoj](http://lightoj.com/) problems compiled into one single bundle!

Used `phantomjs` along with `casperjs` to render and capture the pages in lightoj.


## Dependencies:

- [nodejs](nodejs.org)  
- [phantomjs](phantomjs.org)  
- [casperjs](casperjs.org)  
- [pdftk](https://www.pdflabs.com/tools/pdftk-the-pdf-toolkit/)  
- [pdf-merge](https://github.com/wubzz/pdf-merge)  


## Usage:

Install pdf-merge into the project directory,  
```bash
npm install pdf-merge
```

Create PDFs,

```bash
casperjs pdf.js
```

Merge pdfs,

```bash
node merge.js
```


## Known Issues:

- The images on the problems are missing! Give a timeout after each load.
