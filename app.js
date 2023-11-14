const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "./images"; // Directory containing the images
const outputDir = "./output"; // Directory to save processed images
const imageRegex = /\.(jpg|jpeg|png|gif|bmp|tiff|webp)$/i;
// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Read all files in the input directory
fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error("Error reading the directory", err);
    return;
  }

  files.forEach((file) => {
    const inputFilePath = path.join(inputDir, file);
    const outputFilePath = path.join(outputDir, file);
    if (imageRegex.test(file)) {
      // Process the image file
      console.log(`Processing image file: ${file}`);
      sharp(inputFilePath)
        .resize(1000)
        .jpeg({ quality: 80 })
        .grayscale() // Convert image to grayscale
        .toFile(outputFilePath, (err) => {
          if (err) {
            console.error(`Error processing ${file}:`, err);
          } else {
            console.log(`${file} processed successfully.`);
          }
        });
      // Add your image processing logic here
    } else {
      console.log(`Skipping non-image file: ${file}`);
    }
  });
});
