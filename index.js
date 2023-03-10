const http = require('http')
const fs = require('fs')

const hostname = '127.0.0.1';
const port = 3002;

const home = fs.readFileSync('./index.html')
const about = fs.readFileSync('./about.html')
const contact = fs.readFileSync('./contact.html')
const services = fs.readFileSync('./services.html')


const server = http.createServer((req, res) => {
    console.log(req.url)
    const url = req.url
    res.statusCode = 200
    res.setHeader('Content-type','text/html')

    if(url == '/home'){
        res.end(home)
    }
    else if(url == '/about'){
        res.end(about)
    }
    else if(url == '/contact'){
        res.end(contact)
    }
    else if(url == '/services'){
        res.end(services)
    }
    else{
        res.end("<h1>404 not found</h1>")
    }
    
})

server.listen(port,hostname,()=>{
    console.log(`Server is running on http://${hostname}:${port}/`)
})