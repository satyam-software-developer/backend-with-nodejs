// Make the necessary imports here.
import fs from 'fs';

export const writeBlog = (filePath, content) => {
    // Write your code here.
    try {
        // Synchronously append the content to the specified file.
        fs.appendFileSync(filePath, content);
        // console.log(`Blog written to ${filePath} successfully.`);
    } catch (error) {
        console.error(`Error writing blog to ${filePath}:`, error);
    }
};

export const publishBlog = (filePath) => {
    // Write your code here.
    try {
        // Synchronously read the content of the specified file.
        const content = fs.readFileSync(filePath, 'utf-8');
        return content;
    } catch (error) {
        console.error(`Error reading blog from ${filePath}:`, error);
        return null;
    }
};
