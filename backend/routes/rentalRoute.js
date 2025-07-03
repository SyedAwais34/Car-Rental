import express from 'express';
import { 
    listRentals, 
    addRental,
    removeRental
} from '../controllers/rentalController.js'; 

import adminAuth from '../middleware/adminAuth.js';

const rentalRouter = express.Router();

rentalRouter.post('/add', addRental);

rentalRouter.post('/remove', adminAuth, removeRental);
rentalRouter.get('/list', listRentals); // ✅ use rentalRouter here

export default rentalRouter;
