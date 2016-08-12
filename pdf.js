var casper = require("casper").create();

casper.options.viewportSize = {width: 1600, height: 950};
casper.start();


// A4 size page
casper.page.paperSize = {
  width: '8.27in',
  height: '11.69in',
  orientation: 'landscape',
  border: '0.1in'
};

casper.thenOpen('http://lightoj.com/login_main.php', function() {
  this.echo('lightoj.com opened ...');
});

casper.then(function(){
    console.log("Login using username and password ...");
    this.evaluate(function(){
        document.getElementById("myuserid").value="donald@puffer.fish"; 		// lightoj userid or email
        document.getElementById("mypassword").value="huuuuuuuge"; 				// lightoj password
        document.getElementsByName("Submit")[0].click();
    });
});


var num=0;
casper.repeat(435,function(){
	casper.thenOpen('http://lightoj.com/volume_showproblem.php?problem='+(1000+num));
	casper.then(function(){
		this.evaluate(function(){
			document.querySelector('body').innerHTML=document.querySelector('#problem').innerHTML;
			document.querySelector('body').style.background='white';
		});
		//this.capture('loj1306.png');
		this.capture('loj'+(1000+num)+'.pdf');
		console.log("created "+(1000+num)+" ...");
		num+=1;
	});
});
casper.run();
