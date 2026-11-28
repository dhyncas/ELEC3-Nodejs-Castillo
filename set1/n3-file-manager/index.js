
/*
Name: Airish Dhyn D. Castillo
Section: IV-BSIT A
Activity: N3 - File Manager with fs and path
Date: November 28, 2026
*/

// Import the built-in fs and path modules 
const fs = require("fs");
const path = require("path");

// Folder where all managed files will be stored
const filesFolder = path.join(__dirname, "files");

// Create the files folder if it does not exist
if (!fs.existsSync(filesFolder)) {
  fs.mkdirSync(filesFolder);
}

// Get the file path using path.join()
function getFilePath(fileName) {
  // Prevent users from accessing files outside the files folder
  const safeFileName = path.basename(fileName);

  return path.join(filesFolder, safeFileName);
}

// CREATE a file
function createFile(fileName, content) {
  const filePath = getFilePath(fileName);

  try {
    // "wx" prevents accidentally overwriting an existing file
    fs.writeFileSync(filePath, content, { flag: "wx" });

    console.log("\nFile created successfully!");
    console.log("File name:", path.basename(filePath));
    console.log("Full path:", filePath);
  } catch (error) {
    if (error.code === "EEXIST") {
      console.log("\nError: This file already exists.");
    } else {
      console.log("\nError creating file:", error.message);
    }
  }
}

// READ a file
function readFile(fileName) {
  const filePath = getFilePath(fileName);

  try {
    const content = fs.readFileSync(filePath, "utf8");

    console.log("\n--- File Content ---");
    console.log(content);
    console.log("-------------------");
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log("\nError: File not found.");
    } else {
      console.log("\nError reading file:", error.message);
    }
  }
}

// UPDATE a file by appending new content
function updateFile(fileName, content) {
  const filePath = getFilePath(fileName);

  try {
    if (!fs.existsSync(filePath)) {
      console.log("\nError: File not found. Cannot update.");
      return;
    }

    fs.appendFileSync(filePath, content);

    console.log("\nFile updated successfully!");
    console.log("File name:", path.basename(filePath));
  } catch (error) {
    console.log("\nError updating file:", error.message);
  }
}

// DELETE a file
function deleteFile(fileName) {
  const filePath = getFilePath(fileName);

  try {
    fs.unlinkSync(filePath);

    console.log("\nFile deleted successfully!");
    console.log("File name:", path.basename(filePath));
  } catch (error) {
    if (error.code === "ENOENT") {
      console.log("\nError: File not found. Cannot delete.");
    } else {
      console.log("\nError deleting file:", error.message);
    }
  }
}

// LIST all files in the files folder
function listFiles() {
  try {
    const fileNames = fs.readdirSync(filesFolder);

    if (fileNames.length === 0) {
      console.log("\nThe files folder is empty.");
      return;
    }

    console.log("\n========== FILE LIST ==========");

    fileNames.forEach((fileName) => {
      const filePath = path.join(filesFolder, fileName);
      const content = fs.readFileSync(filePath, "utf8");

      console.log("\nFile name:", path.basename(filePath));
      console.log("Extension:", path.extname(filePath) || "No extension");
      console.log("Full path:", filePath);
      console.log("Content:", content);
      console.log("------------------------------");
    });

    console.log("\nTotal files:", fileNames.length);
  } catch (error) {
    console.log("\nError listing files:", error.message);
  }
}

// Display student information
console.log("Student: Airish Dhyn D. Castillo | Section: IV-BSIT A");

// Read command-line arguments
const command = process.argv[2];
const fileName = process.argv[3];
const content = process.argv.slice(4).join(" ");

// Execute the requested command
switch (command) {
  case "create":
    if (!fileName || !content) {
      console.log('Usage: node index.js create <filename> "content"');
    } else {
      createFile(fileName, content);
    }
    break;

  case "read":
    if (!fileName) {
      console.log("Usage: node index.js read <filename>");
    } else {
      readFile(fileName);
    }
    break;

  case "update":
    if (!fileName || !content) {
      console.log('Usage: node index.js update <filename> "content to append"');
    } else {
      updateFile(fileName, content);
    }
    break;

  case "delete":
    if (!fileName) {
      console.log("Usage: node index.js delete <filename>");
    } else {
      deleteFile(fileName);
    }
    break;

  case "list":
    listFiles();
    break;

  default:
    console.log("\n========== FILE MANAGER ==========");
    console.log("Available commands:");
    console.log('Create: node index.js create <filename> "content"');
    console.log("Read:   node index.js read <filename>");
    console.log('Update: node index.js update <filename> "content"');
    console.log("Delete: node index.js delete <filename>");
    console.log("List:   node index.js list");
    console.log("=================================");
    console.log("\nInvalid or missing command.");
}
