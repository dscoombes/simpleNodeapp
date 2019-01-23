var http = require('http');

var server = http.createServer(function(request, response) {

response.writeHead(200, {"Content-Type": "text/html"});
response.write("Welcome to <b>Contoso Fashions!</b><br/>");

//Pi calculation
var c=10000000;
var Pi=0;
var n=1;
for (i=0;i<=c;i++)
{
Pi=Pi+(4/n)-(4/(n+2))
n=n+4
};

response.write("<br/>");
response.write("Pi calculated");

//Random number
var rnumber=Math.floor(Math.random()*10) + 1;
if (rnumber<2)
{
console.error("rnumber is ", rnumber);
response.write(rnumber);} //Illegal operation
else
{response.write("<br/>Random number is greater than 2, no error generated")};

response.end();

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Contoso Fashions web server running at http://localhost:%d", port);
