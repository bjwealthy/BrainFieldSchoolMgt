import { handleValidationError } from "../middleware/errorHandler.js";
import { Book } from "../models/librarySchema.js";

export const createBook = async (req, res, next) => {
    console.log(req.body);
    const {bookname, author} = req.body;

    try{
        if(!bookname || author){
            handleValidationError("PLease fill full form", 400)
        }
        await Book.create({bookname, author});
        res.status(200).json({
            succes: true,
            message: "A new book is  created!",
        });
    }catch(err){
        next(err);
    }
}

export const deleteBook = async (req, res, next) => {
    const { id } = req.params;

    try {
        const book = await Book.findByIdAndDelete(id);
        if (!book) {
            handleValidationError("Book not found!", 404);
        }
        res.status(200).json({
            success: true,
            message: "Book deleted successfully!",
        });
    }
    catch (err) {
        next(err);
    }
}
export const getBookById = async (req, res, next) => {
    const { id } = req.params;

    try {
        const book = await Book.findById(id);
        if (!book) {
            handleValidationError("Book not found!", 404);
        }
        res.status(200).json({
            success: true,
            book
        });
    }
    catch (err) {
        next(err);
    }
}

export const getBookByAuthor = async (req, res, next) => {
    const { author } = req.params;

    try {
        const books = await Book.find({ author });
        if (books.length === 0) {
            handleValidationError("No books found for this author!", 404);
        }
        res.status(200).json({
            success: true,
            books
        });
    }
    catch (err) {
        next(err);
    }
}       

export const getBookByName = async (req, res, next) => {
    const { bookname } = req.params;
    try {
        const books = await Book.find({ bookname: { $regex: bookname, $options: 'i' } });
        if (books.length === 0) {
            handleValidationError("No books found with this name!", 404);
        }
        res.status(200).json({
            success: true,
            books
        });
    }
    catch (err) {
        next(err);
    }
}   

export const updateBook = async (req, res, next) => {
    const { id } = req.params;
    const { bookname, author } = req.body;

    try {
        const book = await Book.findByIdAndUpdate(id, { bookname, author }, { new: true });
        if (!book) {
            handleValidationError("Book not found!", 404);
        }
        res.status(200).json({
            success: true,
            message: "Book updated successfully!",
            book
        });
    }
    catch (err) {
        next(err);
    }
}           

export const getAllBooks = async (req, res, next) => {
    try{
        const books = await Book.find();

        res.status(200).json({
            success: true,
            books
        });
    }catch(err){
        next(err)
    }
}
