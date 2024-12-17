// Import the necessary modules here.
const path = require('path');

exports.getAbsolutePath = (filePath) => {
    try {
        // Resolve the absolute path of the file by joining it with the current directory
        // and then resolving any relative paths.
        const absolutePath = path.resolve( filePath);
        return absolutePath;
    } catch (error) {
        // If an error occurs, log the error and return null or throw an error
        console.error("Error in resolving absolute path:", error);
        return null;
    }
};
