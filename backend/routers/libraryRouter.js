import express from "express";  
import { createBook, getAllBooks, getBookByName, updateBook, deleteBook, getBookByAuthor} from "../controllers/libraryController.js";
import Book from "../models/librarySchema.js"; // Import the Book model

const libraryRouter = express.Router();

// Create a new book
libraryRouter.post("/", createBook);
// Get all book
libraryRouter.get("/getall", getAllBooks);
// Get a book by registration number
libraryRouter.get("/getByReg/:registrationNumber", getBookByName);
// Get a book by grade
libraryRouter.get("/getByGrade/:grade", getBookByAuthor);  
// Update a book
libraryRouter.put("/:id", updateBook);
// Delete a book
libraryRouter.delete("/:id", deleteBook);
// Get a book by ID      
libraryRouter.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({
                success: false,
                message: "Book not found",
            });
        }
        res.status(200).json({
            success: true,
            book,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});


export default libraryRouter;
