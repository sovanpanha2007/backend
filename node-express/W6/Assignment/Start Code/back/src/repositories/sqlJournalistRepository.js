import { pool } from "../utils/database.js"

export async function getAllArticlesByJournalistId(id) {
    try {
        const [rows] = await pool.query(
            'SELECT articles.id, journalists.id as journalistId, title, content, name as "journalist", category  FROM articles JOIN journalists ON articles.journalistId = journalists.id WHERE journalists.id = ?;',[id]
        )
        return rows
    } catch (error) {
        console.error(error)
        return null
    }
}

export async function createJournalist(name, email, bio) {
    try {
        const [rows] = await pool.query(
            'INSERT INTO journalists (name, email, bio) VALUES (?, ?, ?)',
            [name, email, bio]
        )
        return { id: rows.insertId, name, email, bio }
    } catch (error) {
        throw error
    }
}