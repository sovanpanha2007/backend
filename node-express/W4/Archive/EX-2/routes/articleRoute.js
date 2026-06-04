import express from 'express'
import { getAllArtcle, getAllArtcleById, createArticle, updateArticle, deleteArticle} from '../controllers/articleController.js';
export const articlesRouter = express.Router();

//get all article
articlesRouter.get('/', getAllArtcle);

// get artcile by id
articlesRouter.get('/:id', getAllArtcleById)

//create new article
articlesRouter.post('/', createArticle)

//update article
articlesRouter.put('/:id', updateArticle)

//delete article
articlesRouter.delete('/:id', deleteArticle)