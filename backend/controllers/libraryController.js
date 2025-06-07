import { handleValidationError } from "../middleware/errorHandler";
import { Book } from "../models/librarySchema";

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
