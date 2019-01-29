var http = require('http');

var server = http.createServer(function (request, response) {

response.writeHead(200, {"Content-Type": "text/html"});
response.write("<h1>Welcome to Contoso Fashions</h1>");
response.write("<p>Style from the cloud.</p>");    
response.write("<h2>Contoso Fashions</h2>");
response.write("<p>Contoso Fashions is a world-leading online retailer of quality clothing.</p>");
response.write("<table><tr><td>Clothing for men</td>td>Clothing for women</td><td>Footwear</td></tr><tr><td>Contoso Fashions has a great range of men's clothes.</td><td>Contoso Fashions has a great range of women's clothes.</td><td>Contoso Fashions has a great range of men's and women's shoes.</td></tr></table>" );
//Pi calculation
var c=10000000;
var Pi=0;
var n=1;
for (i=0;i<=c;i++)
{
Pi=Pi+(4/n)-(4/(n+2))
n=n+4
}


console.log("Pi calculated");

//Random number
var rnumber=Math.floor(Math.random()*10) + 1;
if (rnumber<2)
{
console.error("Illegal operation", rnumber);
response.write(rnumber);} //Illegal operation
else
{response.write("<br/>Random number is greater than 2, no error generated");}

response.end();

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Contoso Fashions web server running at http://localhost:%d", port);
