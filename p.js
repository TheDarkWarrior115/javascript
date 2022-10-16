var bcg = "black" ;
var color = "white" ;
document.head.innerHTML = `
	<style>
.cmd {
	background-color: var(--bgc) ;
	color: var(--color);
}
	</style>
` ;
document.body.outerHTML=`
	<body class="cmd">
<pre id="log" class="cmd>Welcome
If You Are Confused Please Type Help For A List Of Commands
</pre>
<input id="cmd" class="cmd" onblur="this.focus()" autofocus>
	</body>
` ;
let logReturn = true;
function log(x) {
	document.getElementById("log").value = document.getElementById("log").value + x ;
};
function runCmd() {
	let cmd = document.getElementById("cmd").value ;
	let cmd = cmd.toLowerCase().split(" ");
	if(cmd.at[0]==="help"){
		log(`\r\n<span style="color:#686868">Help List:</span>\r\n`);
		log(`	Color : Changes Background Color;\r\n`);
		log(`		Supported Values : hex, rgb, rgba, color_name\r\n`);
		log(`		Format : color (Background Color) (Color)\r\n`);
		log(`		Example : color black cyan\r\n`);
		log(`	`);
	};
	if(cmd.at[0]==="color"){
		bgc = cmd.at[1];
		color = cmd.at[2];
	}
};
