import fs from 'fs';
import http from 'http';

const server  = http.createServer();
server.on('request', (req, res) => {

    // Solution 1
    fs.readFileSync('test_file.txt', (err, data) => {
        if(err) console.log(err);
        res.end(data);
    });

    // Solution 2: Streams
    const readable = fs.createReadStream("test_file.txt");
    readable.on('data', (chunk) => {
        res.write(chunk);
    });
    readable.on('end', () => {
        res.end();
    });
    readable.on('error', (err) => {
        console.log(err);
        res.statusCode = 500;
        res.end('File not found!');
    });

    // Solution 3
    const readable1 = fs.createReadStream("test_file.txt");
    readable1.pipe(res);
    // readableSource.pipe(writeableDest)
});

server.listen(8000, () => {
    console.log("Listening....");
});
