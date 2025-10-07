import { w3cHtmlValidator } from "w3c-html-validator";
import fs from "fs";
import path from "path";

// Get all .html files in the current directory
const htmlFiles = fs.readdirSync(".").filter(file => file.endsWith(".html"));

if (htmlFiles.length === 0) {
    console.log("No HTML files found in this directory.");
    process.exit(0);
}

let hasErrors = false;

const validateFile = async (filename) => {
    const options = { filename };
    try {
        const result = await w3cHtmlValidator.validate(options);
        if (result.validity || result.valid) {
            console.log(`${filename}: HTML is valid!`);
        } else {
            hasErrors = true;
            console.log(`${filename}: HTML is not valid :(`);
            if (result.messages) {
                result.messages.forEach(message => {
                    console.log(`${message.type} at line ${message.lastLine}: ${message.message}`);
                });
            }
        }
    } catch (err) {
        hasErrors = true;
        console.error(`${filename}: Validation error:`, err);
    }
};

const run = async () => {
    for (const file of htmlFiles) {
        await validateFile(file);
    }
    process.exit(hasErrors ? 1 : 0);
};

run();