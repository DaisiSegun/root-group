import express from 'express';
import { createCat, getAllCats, getCatById } from '../controllers/cat.controller.js';

const catRouter = express.Router();

// Route to create a new cat
catRouter.post('/create', createCat);

// Route to get all cats
catRouter.get('/all', getAllCats);

catRouter.get('/:id', getCatById);

// Add more routes as needed, such as getting a specific cat by ID, updating, or deleting a cat

export default catRouter;
