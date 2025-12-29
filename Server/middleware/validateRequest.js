// middleware/validateRequest.js
export const validateRequest = (validator) => {
  return (req, res, next) => {
    try {
      const validatedData = validator.parse(req.body);
      req.validatedData = validatedData;
      next();
    } catch (error) {
      if (error.name === 'ZodError') {
        const errors = error.issues.map(issue => ({
          field: issue.path.join('.'),
          message: issue.message
        }));
        return res.status(400).json({
         
          message: 'Validation failed',
          errors
        });
      }
      next(error);
    }
  };
};