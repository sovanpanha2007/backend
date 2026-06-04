import {journalists } from "../models/data.js";
//Implementation
// get all journalists
function getAllJournalist(req,res) {
    console.log('GET / handler invoked');
    const data = journalists;
    try {
        res.status(200).json(data);
    } catch (error) {
        res.status(404).send(error.message)
    }
}

// get a singel journalist by id

function getAllJournalistById(req, res) {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) {
        res.status(400).json({ success: false, message: 'invalid id' });
        return;
    }

    const data = journalists.find(e => e.id === id);
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
// create a new journalist (validate field requriement)

function createJournalist(req,res) {
    const {name , email} = req.body;
    if (!name || !email) {
        res.status(400).json({"message": "invalid input"})
        return;
    }
    let journalistId = Math.max(...journalists.map(user => user.id), 0) + 1;
    const newJournalist = {
        id : journalistId,
        name : name,
        email: email
    }
    journalists.push(newJournalist)
    res.status(201).json({"message": "created new article", newJournalist})
}
// Update an article by ID (update only provided fields
function updateJournalist(req, res) {
    const id = parseInt(req.params.id);
    const {name, email} = req.body;
    const journalistIndex = journalists.findIndex(e => e.id === id)
    if (journalistIndex === -1) {
        res.status(404).json({"message": "not found"})
        return
    }
    if (name) {journalists[journalistIndex].name = name;}
    if (email) {journalists[journalistIndex].email = email;}
    res.status(200).json({"message": "updated"})
}

// Delete an article by ID
function deleteJournalist(req,res) {
    const id = parseInt(req.params.id);
    const journalistIndex = journalists.findIndex(e => e.id === id)
    if (journalistIndex === -1) {
        res.status(404).json({"message": " not found"})
        return
    }
    journalists.splice(journalistIndex, 1)
    res.status(204).json({"message": "deleted"})
}



export { getAllJournalist, getAllJournalistById, createJournalist, updateJournalist, deleteJournalist};