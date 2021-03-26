let http = require('http');
let url = require('url');
let fs = require('fs');

http.createServer((res, req) => {


    q = url.parse(res.url, true).path;

    if (q == '/') {
        console.log('home');
        fs.readFile("./index.html", (err, data) => {
            console.log(err);
            req.writeHead(200, { 'Content-Type': "text/html" });
            req.write(data);
            return req.end();
        })
    }
    else if (q == '/about') {
        console.log('about');
        fs.readFile("About.html", (err, data) => {
            req.writeHead(200, { 'Content-Type': "text/html" });
            req.write(data);
            return req.end();
        })
    } else if (q == '/contact-page') {
        console.log('contact');
        fs.readFile('Contact.html', (err, data) => {
            req.writeHead(200, { 'Content-Type': "text/html" });
            req.write(data);
            return req.end();
        })

    } else {
        req.writeHead(400, { 'Content-Type': "text/html" });
        req.write('404');
        return req.end();
    }
}).listen("8080");