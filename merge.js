var PDFMerge = require('pdf-merge');

var singles = [];

for(i=0;i<435;i++){
    singles[i]="loj"+(1000+i)+".pdf";
}

var pdfMerge = new PDFMerge(singles);


pdfMerge.asNewFile('loj.pdf').merge(function(err){
	console.log("merge completed!");
});