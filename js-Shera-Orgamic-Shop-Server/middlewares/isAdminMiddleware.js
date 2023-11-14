// isAdminMiddleware.js

const isAdmin = (req, res, next) => {
    // Check if the user is an admin based on your authentication logic
    // For example, you might have a 'role' property in your user object
    if (req.user && req.user.role === 'admin') {
      return next(); // User is admin, proceed to the next middleware or route handler
    } else {
      return res.status(403).send('Forbidden: Only admin users can access this resource.');
    }
  };
  
  module.exports = isAdmin;
  