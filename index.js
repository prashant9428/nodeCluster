const express = require("express");
const cluster = require("cluster")
const totalCPUs = require('os').cpus().length;
const server = express();

// if(cluster.isMaster){
//     console.log("totalCpu",totalCPUs)
//     for (var i = 0; i < totalCPUs; i++) {
//         cluster.fork();
//     }

//     cluster.on('online', worker=>{
//         console.log(`worker id : ${worker.id} worker process id ${worker.process.pid} is online`)
//     })

//     cluster.on('exit',worker=>{
//         console.log(`worker id : ${worker.id} worker process id ${worker.process.pid} is offline`)
//         console.log("lets fork the new worker")
//         cluster.fork()
//     })
// }else{
    const logical = require("./route/logical");
    server.use(express.json())
    server.use(logical);
    
    server.listen("3000",function(req,res){
        console.log("working on port 3000")
    })
//}
