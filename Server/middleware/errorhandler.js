export function errorHandler(err, req, res, next) {
    // Log the error for the developer (Internal)
    console.error('ERROR :', err);

    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    
    if (process.env.NODE_ENV === 'development') {
        // IN DEVELOPMENT: Send everything so you can fix the bug easily
        res.status(err.statusCode).json({
            status: err.status,
            error: err,
            message: err.message,
            stack: err.stack,
        });
    } else {
        // IN PRODUCTION: Be careful what you show the user
        if (err.isOperational) {
            
            res.status(err.statusCode).json({
                status: err.status,
                message: err.message,
            });
        } else {
            
            res.status(500).json({
                status: 'error',
                message: 'Something went very wrong!',
            });
        }
    }
}
