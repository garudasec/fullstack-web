import Note from "../models/note.model.js";

const createNote = async (req, res) => {
    try {
        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({
                success: false,
                message: "Data not found for note creation"
            });
        }

        const note = await Note.create({
            title,
            content,
            user: req.userId
        });

        return res.status(201).json({
            success: true,
            message: "Note created successfully",
            note
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to create note",
            error
        });
    }
};


const getNotes = async (req, res) => {
    try {
        const notes = await Note.find({
            user: req.userId
        });

        return res.status(200).json({
            success: true,
            message: "Notes fetched successfully",
            notes
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to fetch notes",
            error
        });
    }
};


const updateNote = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;

        const note = await Note.findOneAndUpdate(
            {
                _id: id,
                user: req.userId
            },
            {
                title,
                content
            },
            {
                new: true
            }
        );

        if (!note) {
            return res.status(404).json({
                success: false,
                message: "Note not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Note updated successfully",
            note
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to update note",
            error
        });
    }
};


const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;

        const note = await Note.findOneAndDelete({
            _id: id,
            user: req.userId
        });

        if (!note) {
            return res.status(404).json({
                success: false,
                message: "Note not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Note deleted successfully"
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to delete note",
            error
        });
    }
};


export { createNote, getNotes, updateNote, deleteNote };