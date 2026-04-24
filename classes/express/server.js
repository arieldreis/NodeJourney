import express from 'express';
import fs from 'fs';
import  path from 'path'
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Caminho do arquivo
const tourSimpleFile = path.join(__dirname, '.', 'toursSimple.json');
// Transformando o arquivo eem formato JSON.
const tours = JSON.parse(fs.readFileSync(`${tourSimpleFile}`));

app.get('/api/v1/tours', (req, res) => {
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

app.get('/api/v1/tours/:id', (req, res) => {
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id);
    try{
        // Status 404
        if(!tour){
            return res.status(404).json({
                status: '404',
                message: 'Invalid ID.'
            });
        }
        // Status 200
        const readFile = fs.readFileSync(tourSimpleFile);
        if(tour){
            return res.status(200).json({
                status: 'success',
                data: {
                    tours: tour,
                }
            });
        }
    } catch (err) {
        console.error('Erro:', erro.message);
    }
});

app.post('/api/v1/create', (req, res) => {
   const newId = tours.length > 0 ? tours[tours.length - 1].id + 1 : 1;
   const newTour = Object.assign({ id: newId }, req.body);

   tours.push(newTour);
   fs.writeFile(tourSimpleFile, JSON.stringify(tours), err => {
    res.status(201).json({
        status: "success",
        data: {
            tour: newTour
        }
    });
   });
});

app.patch('/', (req, res) => {});

app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}`);
});