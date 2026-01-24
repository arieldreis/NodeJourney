import fs from 'fs';
import crypto from 'crypto';

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 1;

setTimeout(() => {
    console.log('This message is logged after 2 seconds');
}, 2000);

setImmediate(() => {
    console.log('This message is logged immediately after I/O events');
});

// In the parameters fisrt of all, error after the data that you want to display.
fs.readFile('C:/Users/ariel/OneDrive/Documentos/GitHub/nodejs-learning/classes/events_loops/test_file.txt', 'utf-8', (err, data) => {
    if(err){
        console.error("Erro: " + err);
        return;
    }
    console.log(data);

    process.nextTick(() => {
        console.log("Process.nextTick");
    });

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now() - start, "Password encrypted.");
        // Date.now() - start, "Password encrypted.") basically it means how much seconds it took to encrypted the message.
    });
});