import { articles, journalists } from "../models/data.js";
//Implementation
// get all article
function getAllArtcle(req,res) {
    console.log('GET / handler invoked');
    const data = articles;
    try {
        res.status(200).json(data);
    } catch (error) {
        res.status(404).send(error.message)
    }
}

// get a singel article by id

function getAllArtcleById(req, res) {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) {
        res.status(400).json({ success: false, message: 'invalid id' });
        return;
    }

    const data = articles.find(e => e.id === id);
    if (!data) {
        res.status(404).json({ success: false, message: 'not found' });
        return;
    }

    try {
        res.status(200).json({ success: true, message: 'found', data });
    } catch (error) {
        res.status(500).send(error.message);
    }
}   
// create a new article (validate field requriement)

function createArticle(req,res) {
    const {title, content, journalistId, categoryId} = req.body;
    if (!title || !content || !journalistId ||!categoryId) {
        res.status(400).json({"message": "invalid input"})
        return;
    }
    let articleId = Math.max(...articles.map(user => user.id), 0) + 1;
    const newArticle = {
        id : articleId,
        title : title,
        content: content,
        journalistId : journalistId,
        categoryId : categoryId
    }
    articles.push(newArticle)
    res.status(201).json({"message": "created new article", newArticle})
}
// Update an article by ID (update only provided fields
function updateArticle(req, res) {
    const id = parseInt(req.params.id);
    const {title, content, journalistId, categoryId} = req.body;
    const articleIndex = articles.findIndex(e => e.id === id)
    if (articleIndex === -1) {
        res.status(404).json({"message": "not found"})
        return
    }
    if (title) {articles[articleIndex].title = title;}
    if (content) {articles[articleIndex].content = content;}
    if (journalistId) {articles[articleIndex].journalistId = journalistId;}
    if (categoryId) {articles[articleIndex].categoryId = categoryId;}
    res.status(200).json({"message": "updated"})
}

// Delete an article by ID
function deleteArticle(req,res) {
    const id = parseInt(req.params.id);
    const articleIndex = articles.findIndex(e => e.id === id)
    if (articleIndex === -1) {
        res.status(404).json({"message": " not found"})
        return
    }
    articles.splice(articleIndex, 1)
    res.status(204).json({"message": "deleted"})
}



export { getAllArtcle, getAllArtcleById, createArticle, updateArticle, deleteArticle};