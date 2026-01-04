import AppError from '../lib/appError.js';
export function roleMiddleware(allowedRoles) {
    return (req, res, next) => {
        // Check if req.user exists (set by requireAuth)
        if (!req.user || !req.user.role) {
            return next(new AppError('Unauthorized: No user role found', 401));
        }

        // Check if the user's role is in the allowed list
        if (!allowedRoles.includes(req.user.role)) {
            return next(
                new AppError(
                    `Access Denied: You do not have permission to perform this action`,
                    403,
                ),
            );
        }

        // User has the role! Proceed to the controller.
        next();
    };
}
