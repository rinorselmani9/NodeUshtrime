// console.log(process.env.TEST);
// process.argv.forEach((index,val) => {
//     console.log(`${index}: ${val}`);
// });

// const readline = require('readline')

// const interface = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
    
// })


// interface.question('Input_1',value_1=>{
//     interface.question('Input_2',value_2=>{
//         console.log(parseInt(value_1)+parseInt(value_2));
//         interface.close()
//     })

// })

// const car = require('./car')
// console.log(car);
// const http = require('http')

// const server = http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/html'})
//     res.write("Hello World");
//     res.end();
// })

// server.listen(4000,()=>{
//     console.log('server is running');
// })

// const http = require('http')
// const fs = require('fs')

// http.createServer(function(req,res){
//     fs.readFile('index.html',function(err,data){
//         if(err){
//             res.write(err)
//             return res.end()
//         }
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write(data)
//         return res.end()
//     })
// }).listen(4000)

