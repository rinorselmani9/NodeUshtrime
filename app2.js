
// let http = require('http')
// let fs = require('fs')


// http.createServer(function(req,res){

//     fs.writeFile("myHtml.html","<h1>Hello</h1>function(err){

//     console.log('saved');
//     })        
    
//     res.end()
// }).listen(4000)
// const d = new Promise ((resolve,reject)=>{
//     fs.unlink('winter.html',function(err){
//         if(err)reject(err)
//         resolve('file deleted')
//     })
// })

// async function init(){
//     const result = await d
// }
// init()

// http.createServer(function(req,res){
//     res.write('hello')
//     res.end()
// }).listen(4000)

// const http = require('http')
// const url = require('url')
// const adr = 'http://localhost:8080/default.htm?emri=rinor&mbiemri=selmani'


// http.createServer(function(req,res){
//     let q = url.parse(adr,true)
//     let qdata = q.query
//     res.write("Emri: "+ qdata.emri+ " Mbiemri: "+qdata.mbiemri)
//     res.end()
// }).listen(4000)


// let fs = require('fs')
// fs.rename('home.html','myHome.html',function(err){
//     if(err)throw err
//     console.log('renamed');
// })

// fs.copyFile('myHome.html','copied.html',function(err){
//     if(err)throw err
//     console.log('copied');
// })

// const calc = require('./calc')

// console.log(calc.add(1,2));
// console.log(calc.substract(5,2));
// console.log(calc.multiply(2,2));
// console.log(calc.divide(4,2));


// const cat = require('./cat')

// const catObj = {
//     tiredness:5,
//     hunger:0,
//     lonliness:0,
//     happiness:15,
// }

// // cat.feed()
// console.log(catObj.hunger=cat.feed());
let uc = require('upper-case')

const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})

readline.question('Whats your name',name=>{
    let myName = uc.upperCase(name)
    console.log(`Hi ${myName}`);
    readline.close()
})