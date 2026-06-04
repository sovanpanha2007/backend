import { categories } from "../models/data.js";

function getAllCategory(req, res) {
    try {
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function getAllCategoryById(req, res) {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) {
        res.status(400).json({ success: false, message: "invalid id" });
        return;
    }

    const data = categories.find(category => category.id === id);
    if (!data) {
        res.status(404).json({ success: false, message: "not found" });
        return;
    }

    try {
        res.status(200).json({ success: true, message: "found", data });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

function createCategory(req, res) {
    const { name } = req.body;
    if (!name) {
        res.status(400).json({ message: "invalid input" });
        return;
    }

    const categoryId = Math.max(...categories.map(category => category.id), 0) + 1;
    const newCategory = {
        id: categoryId,
        name,
    };

    categories.push(newCategory);
    res.status(201).json({ message: "created new category", newCategory });
}

function updateCategory(req, res) {
    const id = parseInt(req.params.id, 10);
    const { name } = req.body;
    const categoryIndex = categories.findIndex(category => category.id === id);
    if (categoryIndex === -1) {
        res.status(404).json({ message: "not found" });
        return;
    }

    if (name) {
        categories[categoryIndex].name = name;
    }

    res.status(200).json({ message: "updated", category: categories[categoryIndex] });
}

function deleteCategory(req, res) {
    const id = parseInt(req.params.id, 10);
    const categoryIndex = categories.findIndex(category => category.id === id);
    if (categoryIndex === -1) {
        res.status(404).json({ message: "not found" });
        return;
    }

    categories.splice(categoryIndex, 1);
    res.status(204).end();
}

export { getAllCategory, getAllCategoryById, createCategory, updateCategory, deleteCategory };
