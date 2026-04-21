import express from 'express';
import fs from 'fs';
import  path from 'path'
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/api/v1/tours', (req, res) => {
    const tourSimpleFile = path.join(__dirname, '.', 'toursSimple.json');
    try{
        const readFile = fs.readFileSync(tourSimpleFile);
        return res.status(200).json({
            status: 'success',
            data: {
                tours: JSON.parse(readFile)
            }
        });
    } catch (err) {
        console.error('Erro:', erro.message);
    }
});

app.post('/criar', (req, res) => {
    res.send("You can post to this endpooint");
});

app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}`);
});