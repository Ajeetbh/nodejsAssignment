//1:
// const http=require('http');
// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'aplication/json'});
//     var vegetable={
//         'result':{
//             'rootVegetables':[
//                 'turnips',
//                 'ginger',
//                 'beets'
//             ],
//             'leafyVegetables':[
//                 'broccoli',
//                 'spinach',
//                 'cabbage'
//             ]
//         }
//     };
//     res.end(JSON.stringify(vegetable))
// })
// server.listen(8000,()=>{
//     console.log('app is running')
// })


const http = require('http');
const fs = require('fs');
const node=require('./node.js')
node.use('/vegetable',node)
http.createServer(function (req, res) {
  fs.readFile('node.js', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/js'});
    res.write(data);
    return res.end();
  });
}).listen(8080);