var http = require('http');

var server = http.createServer(function (request, response) {

response.writeHead(200, {"Content-Type": "text/html"});
//response.write("<style type="text/css"><!-- body{color:#000000;background-color:#FFFFFF;font-family:sans-serif;} a{color:#0000FF;} a:visited{color:#800080;} a:hover{color:#008000;} a:active{color:#FF0000;} --></style>");    
//response.write("<h1>Welcome to Contoso Fashions</h1>");
//response.write("<p>Style from the cloud.</p>");    
//response.write("<h2>Contoso Fashions</h2>");
//response.write("<p>Contoso Fashions is a world-leading online retailer of quality clothing.</p>");
//response.write("<table><tr><td>Clothing for men</td><td>Clothing for women</td><td>Footwear</td></tr><tr><td>Contoso Fashions has a great range of men's clothes.</td><td>Contoso Fashions has a great range of women's clothes.</td><td>Contoso Fashions has a great range of men's and women's shoes.</td></tr></table>" );
response.write('<!DOCTYPE html><html lang="en"> <head> <meta charset="utf-8"> <title>Contoso Fashions</title> <style type="text/css"><!-- body{font-family:sans-serif;}table{border-collapse: collapse;}table, th, td{border: 1px solid black; text-align:center; font-family:sans-serif;}table.center{width:70%; margin-left:15%; margin-right:15%;}.text-center{text-align:center;}--> </style> </head> <body><div class="text-center"> <h1>Welcome to Contoso Fashions</h1> <p>Style from the cloud.</p><h2>Contoso Fashions</h2> <p>Contoso Fashions is a world-leading online retailer of quality clothing.</p></div><table width="80%" class="center" > <tr> <td width="33%">Clothing for men</td><td width="33%">Clothing for women</td><td width="33%">Footwear</td></tr><tr> <td>Contoso Fashions has a great range of men\'s clothes.</td><td>Contoso Fashions has a great range of women\'s clothes.</td><td>Contoso Fashions has a great range of men\'s and women\'s shoes.</td></tr><tr > <td bgcolor="#7F7F7F">&nbsp;<br/><br/><br/><br/></td><td bgcolor="#C0C0C0">&nbsp;<br/><br/><br/><br/></td><td bgcolor="#C3C3C3">&nbsp;<br/><br/><br/><br/></td></tr></table><div class="text-center"><p>Contoso Fashions is currently re-branding, and we will be using this as an opportunity to bring new purchasing, tracking, and social media features to our online services.</p><p>The company has won several prestigious and influential industry and consumer awards for the high standard of our online customer experience.</p><address> 4567 Main St<br/> Buffalo, NY 98052<br/> <abbr title="Phone">P:</abbr> 555-0100 </address></br> <address> <strong>Support:</strong> <a href="mailto:Support@contoso.com">Support@contoso.com</a><br/> <strong>Marketing:</strong> <a href="mailto:Marketing@contoso.com">Marketing@contoso.com</a> </address></div></body></html>');
    
//Pi calculation - to slow processing down a bit
var c=10000000;
var Pi=0;
var n=1;
for (i=0;i<=c;i++)
{
Pi=Pi+(4/n)-(4/(n+2))
n=n+4
}


console.log("Information message #1 from index.js");

//Random number
var rnumber=Math.floor(Math.random()*10) + 1;
if (rnumber<2)
{
    console.error("Error message from index.js, Illegal operation", rnumber);
    response.write(rnumber); //Illegal operation
    response.end();}
else
{
    response.write("<br/>Call for today's special offers!");
    response.end();
    console.log("Information message #2 from index.js");

}

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Contoso Fashions web server running at http://localhost:%d", port);