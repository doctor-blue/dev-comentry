const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Home page');
    }
    if(req.url === '/about'){
        res.write('About page');
    }
    // console.log(req.url);
    // res.write('Hello server');
    res.end();
});

server.listen(8080);