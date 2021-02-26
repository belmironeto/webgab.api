import express from 'express';
import controller from '../controller/serverController.js';

const app = express();

app.get('/api/servers/', controller.findAll);
app.post('/api/servers/add', controller.addOne);

export { app as serverRouter };
