// console.log("This is Node JS Tutorials...");

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Global Objects
// var time = 0;
// var timer = setInterval(function () {
//     time += 2;
//     console.log(time + " Seconds have passed");
//     if (time > 5) {
//         clearInterval(timer);
//     }
// }, 2000); 

// console.log(__dirname);
// console.log(__filename);

// function sayHi(fun) {
//     console.log('Hi');
//     fun();
// }


////////////////////////////////////////////////////////////////////////////////////////////////////////

// var SayBye = function sayBye() {
//     console.log('Bye');
// }

// // SayBye();
// sayHi(SayBye);

////////////////////////////////////////////////////////////////////////////////////////////////////////

// 
// var counter = require('./count');

// var names = ['One', 'Two', 'Three'];
// console.log(counter(names));


// var stuff = require('./stuff');
// var names = ['One', 'Two', 'Three'];
// console.log(stuff.counter(names));
// console.log(stuff.adder(2, 4));
// console.log(stuff.adder(stuff.pi, 3));

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Event Emitter 
// var events = require('events');
// var myEmitter = new events.EventEmitter();
// myEmitter.on('firstEvent', function (msg) {
//     console.log(msg);
// });

// myEmitter.emit('firstEvent','This is First Event');


// var events = require('events');
// var util = require('util');

// var Person = function (name) {
//     this.name = name;
// };

// util.inherits(Person, events.EventEmitter);

// var one = new Person('one');
// var two = new Person('two');
// var three = new Person('three');
// var people = [one, two, three];

// people.forEach(function (person) {
//     person.on('speak', function (msg) {
//         console.log(person.name + ' said : ' + msg);
//     });
// });


// one.emit('speak', 'hi dudes');
// two.emit('speak', 'hello all');

////////////////////////////////////////////////////////////////////////////////////////////////////////  
// Files

// var fs = require('fs');
// readFileSync
// var readMe = fs.readFileSync('readMe.txt', 'utf8');
// console.log(readMe);
// fs.writeFileSync('writeMe.txt', readMe);

// readFile
// fs.readFile('readMe.txt', 'utf8', function (err, data) {
//     // console.log(data);
//     fs.writeFile('writeMe.txt', data, function (err, result) {
//         if (err) console.log('error', err);
//     });
// });

// console.log('test');

////////////////////////////////////////////////////////////////////////////////////////////////////////
// Directories

// var fs = require('fs');
// fs.mkdirSync('stuff');
// fs.rmdirSync('stuff');

// fs.mkdir('stuff', function () {
//     fs.readFile('readMe.txt', 'utf8', function (err, data) {
//         fs.writeFile('./stuff/writeMe.txt', data, function (err, result) {
//             if (err) console.log('error', err);
//         });
//     });
// });

// fs.unlink('./stuff/writeMe.txt', function () {
//     fs.rmdir('stuff', function (err, result) {
//         if (err) console.log('error', err);
//     });
// });

////////////////////////////////////////////////////////////////////////////////////////////////////////

//  Client Server Interaction

// var http = require('http');
// var server = http.createServer(function (req, res) {
//     console.log('Url : ' + req.url);
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello ....!');
// });

// server.listen(3000, '127.0.0.1');
// console.log('listenting at 3000');

// Readable Streams
// Write Streams
// var http = require('http');
// var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8");
// var myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");
// myReadStream.on('data', function (chunk) {
//     console.log('new chunk received:');
//     // console.log(chunk);
//     myWriteStream.write(chunk);

// });

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Pipes
// var http = require('http');
// var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8");
// // var myWriteStream = fs.createWriteStream(__dirname + "/writeMe.txt");
// // myReadStream.pipe(myWriteStream);
// var http = require('http');
// var server = http.createServer(function (req, res) {
//     console.log('Url : ' + req.url);
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     // res.end('Hello ....!');
//     myReadStream.pipe(res);
// });

// server.listen(3000, '127.0.0.1');
// console.log('listenting at 3000');

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Html Pages
// var http = require('http');
// var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname + "/demo.html", "utf8");
// var server = http.createServer(function (req, res) {
//     console.log('Url : ' + req.url);
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     // res.end('Hello ....!');
//     myReadStream.pipe(res);
// });

// server.listen(3000, '127.0.0.1');
// console.log('listenting at 3000');

////////////////////////////////////////////////////////////////////////////////////////////////////////

// JSON Data
// var http = require('http');
// var server = http.createServer(function (req, res) {
//     console.log('Url : ' + req.url);
//     res.writeHead(200, { 'Content-Type': 'text/JSON' });
//     var myObj = {
//         name: "Roy",
//         job: "Developer"
//     };
//     res.end(JSON.stringify(myObj));
// });
// server.listen(3000, '127.0.0.1');
// console.log('listenting at 3000');

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Routing
// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(function (req, res) {
//     console.log('Url : ' + req.url);
//     res.writeHead(200, { 'Content-Type': 'text/JSON' });

//     if ((req.url == '/index') || ((req.url == '/'))) {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         fs.createReadStream(__dirname + "/home.html", "utf8").pipe(res);
//     } else if ((req.url == '/demo')) {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         fs.createReadStream(__dirname + "/demo.html", "utf8").pipe(res);
//     } else if ((req.url == '/json')) {
//         res.writeHead(200, { 'Content-Type': 'text/JSON' });
//         var myObj = {
//             name: "Roy",
//             job: "Developer"
//         };
//         res.end(JSON.stringify(myObj));
//     } else {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         fs.createReadStream(__dirname + "/404.html", "utf8").pipe(res);
//     }
// });

// server.listen(3000, '127.0.0.1');
// console.log('listenting at 3000');

////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Express

// var express = require('express');
// var bodyParser = require('body-parser');
// const { urlencoded } = require('body-parser');
// var app = express();

// var urlencodedParser = bodyParser.urlencoded({ extended: false });

// app.set('view engine', 'ejs');
// // app.use('/assets', function (req, res, next) {
// //     console.log(req.url);
// //     next();
// // });

// app.use('/assets', express.static('assets'));

// app.get('/', function (req, res) {
//     // res.send('this is home page');
//     // res.sendFile(__dirname + '/home.html');
//     res.render('home');
// });

// app.get('/demo', function (req, res) {
//     // res.send('this is contact page');
//     // res.sendFile(__dirname + '/demo.html');
//     // console.log(req.query);
//     res.render('demo', { qs: req.query });
// });

// app.post('/demoAction', urlencodedParser, function (req, res) {
//     res.send(req.body);
//     // res.sendFile(__dirname + '/demo.html');
//     console.log(req.body);
//     // res.render('demo', { qs: req.query });
// });


// app.get('/hello/:name', function (req, res) {
//     // res.send('hello ' + req.params.name);
//     var myObj = {
//         city: "Delhi",
//         job: "Developer"
//     };
//     var hobbies = ['eating', 'sleeping', 'repeat above two'];
//     res.render('hello', { name: req.params.name, details: myObj, hobbies: hobbies });
// });

// app.listen(3000);

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Node JS CRUD Using MySQL, Express

var express = require('express');
var bodyParser = require('body-parser');
var Router = require('./routes');
const { urlencoded } = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
app.get("/", function (req, res) {
    res.end('This is Node JS CRUD Applications');
});
app.use("/products", Router);

app.get("/addproduct", function (req, res) {
    res.sendFile(__dirname + '/addproduct.html');
});



app.listen(3000);