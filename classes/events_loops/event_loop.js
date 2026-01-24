import fs from 'fs';

setTimeout(() => {
    console.log('This message is logged after 2 seconds');
}, 2000);

setImmediate(() => {
    console.log('This message is logged immediately after I/O events');
});

fs.readFile('C:/Users/ariel/OneDrive/Documentos/GitHub/nodejs-learning/classes/events_loops/test_file.txt', 'utf-8', (err, data) => {
    if(err){
        console.error("Erro: " + err);
        return;
    }
    console.log(data);
});