////! STREAMING

// const {createReadStream} = require('fs');

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

////* Simple example
// const stream = createReadStream("./content/first.txt",{highWaterMark: 90000, encoding: 'utf8'});
// stream.on('data', (chunkedData) => {
//         console.log(chunkedData);
// })

// stream.on('error', (err) => {
//         console.log(err);
// })

////*example with https

// var https = require('https');
// var fs = require('fs');

// https.createServer((req, res) => {
//         const fileStream = fs.createReadStream('./content/first.txt','utf8');
//         fileStream.on('data',(data)=>{
//                 res.write(data);
//         })
//         fileStream.end('end',()=>{
//                 res.end();
//         });

//         fileStream.on('error',(err)=>{
//                 res.end(err);
//         });
// }).listen(5000);

////! HTTPS request

const http = require('http');

// const homePage = readFileSync('./navbar-app/index.html')

const server = http.createServer((req,res) => {
        const url = req.url;
        if (url === "/") {
                res.writeHead(200,{'Content-Type': 'text/html'});

                // //* we can pass whole page also
                // res.write(homePage);

                res.write("<h1>Welcome to home page</h1>");
                res.end();
        }

        else if (url === "/about") {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write("<h1>Welcome to about page</h1>");
                res.end();
        }
        else{
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write("<h1>Page does not exist</h1>");
                res.end();
        }

})

server.listen(5000);