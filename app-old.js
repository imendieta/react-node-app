const http = require('http');

// create a server
http.createServer((req, res) => {

    //Define a header
    res.writeHead(200, {
        "Content-Type":"application/json"
    });
    
    res.write(JSON.stringify({
        name: "Iñaki",
        apellido: "Mendieta"
    }));
    //Finish the response
    res.end();

})
.listen(8081, () => {
    console.log('Listening port 8081');
});