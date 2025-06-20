export const handleValidationError = (message, statusCode) => {
    error.statusCode = statusCode;
    throw eerror;  
}

export const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error";
    res.status(statusCode).json({success: false, message})
}