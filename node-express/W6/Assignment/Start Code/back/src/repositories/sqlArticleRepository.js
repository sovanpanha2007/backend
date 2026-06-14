//
//  This repository shall:
//  - Connect to the database (using the pool provided by the database.js)
// -  Perfrom the SQL querries to implement the bellow API
//
import {pool} from '../utils/database.js'



// Get all articles
export async function getArticles() {
    // TODO
    try {
        const [rows] = await pool.query(
            'SELECT articles.id, articles.journalistId, title, content, name as "journalist", category FROM articles JOIN journalists ON articles.journalistId = journalists.id;',
        );
        return rows
    } catch (error) {
        console.error(error)
        return null
    }
}

// Get one article by ID
export async function getArticleById(id) {
    // TODO
    try {
        const [rows] = await pool.query(
            'SELECT articles.id, articles.journalistId, title, content, name as "journalist", category  FROM articles JOIN journalists ON articles.journalistId = journalists.id WHERE articles.id = ?;',
            [id]
        );
        return rows[0];
    } catch (error) {
        console.error(error)
        return null
    } 
}

// Create a new article
export async function createArticle(article) {
    // TODO
    try {
        if (!article.journalistId) return null

        const [journalists] = await pool.query(
            'SELECT id FROM journalists WHERE id = ? LIMIT 1',
            [article.journalistId]
        )
        // Because Database don't return null , it only return empty array
        if (journalists.length === 0) return null

        // To prevent SQL Injection, we use paramater instead of directly code to sql query
        const [rows] = await pool.query(
            `INSERT INTO articles (title, content, journalistId, category)
             VALUES (?, ?, ?, ?)`,
            [article.title, article.content, article.journalistId, article.category]
        )
        return ({id: rows.insertId})
    } catch (error){
        console.error(error)
        return null
    }
}

// Update an article by ID
export async function updateArticle(id, updatedData) {
    // TODO
    try {
        if (!updatedData.journalistId) return null

        const [journalists] = await pool.query(
            'SELECT id FROM journalists WHERE id = ? LIMIT 1',
            [updatedData.journalistId]
        )

        if (journalists.length === 0) return null

        const [rows] = await pool.query(
            `UPDATE articles
             SET title = ?,
                 content = ?,
                 journalistId = ?,
                 category = ?
             WHERE id = ?`,
            [updatedData.title, updatedData.content, updatedData.journalistId, updatedData.category, id]
        )
        if (rows.affectedRows === 0) return null
        return ({id})
    } catch (error) {
        console.error(error)
        return null
    }
}

// Delete an article by ID
export async function deleteArticle(id) {
    // TODO
    try {
        const [rows] = await pool.query(
            'DELETE FROM articles WHERE id = ? ', [id]
        )
        return ({id: rows.insertId})
    } catch (error) {
        console.error(error)
        return null
    }
}

