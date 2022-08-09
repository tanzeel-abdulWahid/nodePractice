////!HTTP TOPIC
// const http = require('http');

// const server = http.createServer((req,res) => {
//         // console.log(req);
//         res.write("Welcome to the server");
//         res.end();
// })

// server.listen(100);

// const server = http.createServer((req,res) => {
//         if (req.url === "/") {
//                 res.end("This is Home Page");
//         }
//         else if (req.url === "/about") {
//                 res.end("This is about Page");
//         }
//         else {
//                 res.end(`
//                         <h1>Oops!</h1>
//                         <p>We can't seem to find the page you are looking for</p>
//                         <a href="/">back home</a>
//                 `)
//         } 
// })
// server.listen(100);

//// ! event  loop ex

// const server = http.createServer((req,res) => {
//         console.log("req event");
//         res.end("hello world!");
// })

// server.listen(100, () => {
//         console.log("Server listening on port 100");
// });

//// ! Async await 

// const {readFile, writeFile} = require("fs").promises

// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async () => {
//         try {
//                 const first = await readFile("./content/first.txt","utf8")
//                 const second = await readFile("./content/second.txt","utf8")
//                 await writeFile("./content/result.txt",`this is magic ${first} ${second}`,{flag:'a'})
//                 console.log(first,second);

//         } catch (error) {
//                 console.log(error);
//         }
// }
// start();


//// ! Events 

const EventEmitter = require('events');
const customEmitter = new EventEmitter();

////* on and emit methods
////* keep track of the order
////* additional arguments
////* built-in modules utilize it

// customEmitter.on("response",()=> {
//         console.log("Response received");
// })

// const eventHandler = (id,name) => {
//         console.log(`received ${name} and ${id}`);
// }
// customEmitter.on("response",eventHandler)
// customEmitter.emit("response",1,'tanzeel')

//// * Http using events 
const http = require('http');
const server = http.createServer();
server.on('request', (req,res) => {
        res.end("Welcome")
})

server.listen(100);