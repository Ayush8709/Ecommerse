const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1'
const port = 3000;

const home = fs.readFileSync('scr/Index.html')
const about = fs.readFileSync('scr/About us.html')
const contact = fs.readFileSync('scr/Contact us.html')
const product = fs.readFileSync('scr/Product.html')
const singleproduct = fs.readFileSync('scr/Single Produnt.html')

const server = http.createServer((req,res) =>{
    console.log(req.url);
    url = req.url;
    res.statusCode = 200;
    res.setHeader('Content-type','text/html')
    if(url=='/'){
        res.end(home)
    }
    else if(url=='/about'){
        res.end(about)
    }
    else if(url=='/contact'){
        res.end(contact)
    }
    else if(url=='/product'){
        res.end(product)
    }
    else if(url=='/singleproduct'){
        res.end(singleproduct)
    }
    else{
        res.statusCode = 404;
        res.end("<h1> 404 not found </h1>")
    }
});

server.listen(port,hostname,()=>{
    console.log(`server runnign at http://${hostname}:${port}`);
});