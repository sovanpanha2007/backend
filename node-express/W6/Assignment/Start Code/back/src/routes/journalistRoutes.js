import { Router } from "express";
import {
	getAllArticlesByJournalistId,
	createJournalist,
} from "../controllers/journalistController.js";

const journalistRouter  = Router();

journalistRouter.get('/:id/articles', getAllArticlesByJournalistId)
journalistRouter.post('/', createJournalist)

export default journalistRouter;