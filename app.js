// const readline = require('readline').createInterface({
//     input:process.stdin,
//     output:process.stdout
// })

// readline.question('Whats your name',name=>{
//     console.log(`Hi ${name}`);
//     readline.close()
// })



// const http = require('http');

// http.createServer(function(req,res){

//     res.write('Helloo')
//     res.end()
// }).listen(4000)

// const fs = require('fs')
// console.log('before');
// fs.readFile('index.html',function(err,data){
//     console.log('during');
// })
// console.log('after');


// const http = require('http')
// const data = require('./data')

// http.createServer(function(req,res){
//     res.write(`Sot eshte: ${data}`)
//     res.end()
// }).listen(4000)
// const http = require('http')
// const name = require('./data')

// http.createServer(function(req,res){
//     console.log(res);
//     res.write(`${name}`)
//     res.end()
// }).listen(4000)


// const http = require('http')
// const fs = require('fs')
// http.createServer(function(req,res){
//     fs.readFile('../Javascript/Calculator/index6.html',function(err,data){
//         if(err){
//             res.write(err)
//             return res.end()
//         }
//             res.writeHead(200,{'Content-Type':'text/html'});
//             res.write(data)
//             return res.end()
//         })
// }).listen(4000)

// let fs = require('fs')

// fs.unlink('mynewfile1.txt',function(err){
//     if(err)throw err;
//     console.log('saved');
// })


// const url = require('url')
// const adr = "https://www.google.com/search?q=mergimzhjqei&oq=mergimzhjqei&aqs=chrome..69i57j0i546l4.2194j0j7&sourceid=chrome&ie=UTF-8"
// let q = url.parse(adr,true)

// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);

// let qdata = q.query
// console.log(qdata);

// const http = require('http')
// const url = require('url')
// const fs = require('fs')

// http.createServer(function(req,res){
//     let query = url.parse(req.url,true);
//     let filename = "."+query.pathname
//     fs.readFile(filename,function(err,data){
//         if(err){
//             res.writeHead(404,{'Content-Type':'text/html'})
//             return res.end()
//         }
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.write(data)
//         res.end()
//     })
// }).listen(4000)

// const connect  =  require('connect')
// const net = require('net')
// const http = require('http')
// const requestIp = require('request-ip')

// let app = connect()

// app.use(requestIp.mw({ attr:'getIP'}))

// app.use(function(req,res){
//     let ip  = req.getIP
//     console.log(ip);

//     let type = net.isIP(ip) 
//     res.end('IP address is '+ ip + ' and is of type IPv: '+ type +'\n')
// })
// http.createServer(app).listen(4000)


// const http = require('http');
// http.request({
//     host:'www.google.com',
//     method:'GET',
//     path:'/'
// },function(response){
//     response.setEncoding('utf-8');
//     response.on("readable",function(){
//         console.log(response.read());
//     });
// }).end();


// let str = 'aaewewedsdewddsxac'


// fs.readFile('regex.txt','utf-8',function(err,data){
//     if(err)throw err
//     // console.log(data);
//     str = data.replace(new RegExp("[Aa]{2,}"),"b")
//     console.log(str);
//     fs.writeFile('regex.txt',str,function(err){
//         if(err)throw err;
//         console.log(str);
//     })
    
// })

// const user = {
//     name:"Rinor",
//     lastname:"Selmani"
// }
// const data = JSON.stringify(user)
// fs.writeFile('user.json',data,function(err){
//     if(err)throw err
//     console.log('saved');
// })


// fs.readFile('user.json','utf-8',function(err,data){

//     if(err)throw err

//     let myData = JSON.parse(data)
//     myData.lastname = 'Selmani'
//     console.log(myData);


//     let mynewData = JSON.stringify(myData)

//     fs.writeFile('user.json',mynewData,function(err){
//         if(err)throw err
//         console.log('saved');
//     })
// })


// let myArray = [1,2,3]

// myArray.forEach(element=>{
//     fs.appendFile('mytext.txt',element+'',(err)=>{
//         if(err)throw err
//         console.log('saved');
//     })
// })
// let http = require('http')
// let readline = require('readline')
// let fs = require('fs')
// let text = "";

// http.createServer(function(req,res){

//     let file = readline.createInterface({
//         input:fs.createReadStream('index.html')
//     })
    
//     let lineno = 0;

//     file.on('line',function(line){
//         lineno++;
//         text = text + 'line number is : '+ lineno + ':'+ line + '\n'
        
//     })
//     res.write(text)
//     res.end()
// }).listen(4000)
// let http = require('http')
// let fs = require('fs')
// let readline = require('readline')
// let text = ""

// http.createServer(function (req, res) {
//     let file = readline.createInterface({
//         input: fs.createReadStream('index.html')
//     });

//     let lineone = 0;
//     file.on('line', function (line) {
//         lineone++;
//         console.log('line numer ' + lineone + ': ' + line);
//         text = text + 'line numer ' + lineone + ': ' + line + '\n';
        

//     });
//     res.write(text)
//     res.end();

// }).listen(4000)
// let file = readline.createInterface({
//     input: fs.createReadStream('index.html')
// });

// let lineone = 0;
//     file.on('line', function (line) {
//         lineone++;
//         console.log('line numer ' + lineone + ': ' + line);
//         text = text + 'line numer ' + lineone + ': ' + line + '\n';
        

//     });
// http.createServer(function (req, res) {
    

//     res.writeHead(200);
//     res.write(text)
//     res.end();

// }).listen(4000)

// console.log('Server running at http://localhost:3030');

// let zlib =  require('zlib')
// let fs  = require ('fs')

// let gzip = zlib.createGzip();
// let r = fs.createReadStream('index.html')
// let w = fs.createWriteStream('./demogzipfile.html.gz')
// r.pipe(gzip).pipe(w)
// let fs = require('fs')

// try{
//     let data = fs.readFileSync('index.html')
//     console.log(true);
// }catch(err){
//     console.log(err);
// }


