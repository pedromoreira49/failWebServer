import http from 'http';
import url from 'url';
import fetch from 'node-fetch';

const host = '::';
const port = 3000;

const prepareResponse = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    const query = url.parse(req.url, true).query;
    fetch(`https://viacep.com.br/ws/${query.cep}/json`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch(function (err){
            console.log(err);
    });
    res.end();
}

const app = http.createServer(prepareResponse);



app.listen(port, host, () => {
    console.log("Server up!")
});