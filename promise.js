var fs = require('fs');

function readFile(path){
    return new Promise((reject,resolve)=>{
        fs.readFile(path,'utf-8',(err,data)=>{
            if(err){
                reject(err);
            }else{
                resolve(data);
            }             
        })
    })
}

function appendFile(path, contents){
    return new Promise((reject, resolve)=>{
        fs.appendFile(path, contents, function (err) {
            if (err) throw err ;
        });
        
    })
}   


appendFile('read.txt', 'Hello' + '\n').then((result) => {
    console.log(result);
});
appendFile('read.txt', 'World' + '\n').then((result) => {
    console.log(result);
});
// Promise.all([
//     readFile('')
// ]).then((value)=>{
//     ['Xin Chao']
// })

// writeFile('./read.txt').then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
// })
readFile('./read.txt').then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
})
