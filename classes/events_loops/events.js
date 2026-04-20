import EventEmitter from "events";
import http from 'http'
class Sales extends EventEmitter{
    constructor(){
        super();
    }
};

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
    console.log("There was a new sale.");
});
myEmitter.on("newSale", () => {
    console.log("Costumer name: Jonas");
});
myEmitter.on("newSale", (stock) => {
    console.log(`There are now ${stock} items left in stock.`);
});

myEmitter.emit("newSale", 9);

/////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
    console.log("Request received.");
    console.log(req.url);
    res.end("Request received.");
});

server.on("request", (req, res) => {
    console.log("Another request 😊.");
});

server.on("close", (req, res) => {
    console.log("Server closed.");
});

server.listen(8000, () => {
    console.log("Waiting for requests...");
})
