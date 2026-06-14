import * as journalistRepository from "../repositories/sqlJournalistRepository.js"

export async function getAllArticlesByJournalistId(req, res){
  try {
    const article = await journalistRepository.getAllArticlesByJournalistId(req.params.id)
    res.status(200).send(article)
  } catch (error){
    console.error("Error get articles by journalistId", error)
    res.status(500).json({message: "Server error"})
  }
}

export async function createJournalist(req, res) {
  try {
    const { name, email, bio } = req.body ?? {};

    if (!name || !name.trim()) {
      return res.status(400).json({ message: "Journalist name is required" });
    }

    if (!email || !email.trim()) {
      return res.status(400).json({ message: "Journalist email is required" });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanBio = typeof bio === "string" ? bio.trim() : null;

    const journalist = await journalistRepository.createJournalist(
      cleanName,
      cleanEmail,
      cleanBio
    );

    if (!journalist) {
      return res.status(500).json({ message: "Failed to create journalist" });
    }

    return res.status(201).json(journalist);
  } catch (error) {
    console.error("Error creating journalist", error);
    return res.status(500).json({ message: "Server error" });
  }
}