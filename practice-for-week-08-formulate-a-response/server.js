// Your code here
const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

// Your code here

const http = require('http');

server = http.createServer((req, res)=> {
    console.log(req.method, req.url);

    const responseBody = ` <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hello World!</title>
    </head>
    <body>
      <h1>Hello there!</h1>
    </body>
    </html> `

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(responseBody);
    res.end;

})

const port = 5000;
server.listen(port, ()=> console.log("The server is running on port:", port))
/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
