import express from 'express'
import { getAllJournalist, getAllJournalistById,createJournalist,updateJournalist,deleteJournalist } from '../controllers/journalistController.js';
export const journalistRouter = express.Router();

//get all article
journalistRouter.get('/', getAllJournalist);

// get artcile by id
journalistRouter.get('/:id', getAllJournalistById)

//create new article
journalistRouter.post('/', createJournalist)

//update article
journalistRouter.put('/:id', updateJournalist)

//delete article
journalistRouter.delete('/:id', deleteJournalist)