class AppError extends Error {
    constructor(message, statusCode) {
        super(message);

        this.statusCode = statusCode;
        // Determine status based on code (4xx = fail, 5xx = error)
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';

        // This flag helps us identify "trusted" errors in the global handler
        this.isOperational = true;

        // Captures the stack trace so we can see where the error happened
        Error.captureStackTrace(this, this.constructor);
    }
}

export default AppError;
