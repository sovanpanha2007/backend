import express from "express";
import { getAllCategory, getAllCategoryById, createCategory, updateCategory, deleteCategory } from "../controllers/categoryController.js";

export const categoryRouter = express.Router();

categoryRouter.get("/", getAllCategory);
categoryRouter.get("/:id", getAllCategoryById);
categoryRouter.post("/", createCategory);
categoryRouter.put("/:id", updateCategory);
categoryRouter.delete("/:id", deleteCategory);
