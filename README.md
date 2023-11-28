# Image Resizer and Background Painter

This Node.js application utilizes the `sharp` library for image resizing and grayscale conversion, and `@imgly/background-removal-node` for painting the background gray.

## Features

- **Resize Images:** Uses Sharp to resize images.
- **Grayscale Conversion:** Converts images to grayscale.
- **Gray Background:** Applies a gray background using `@imgly/background-removal-node`.

## Getting Started

Follow these simple steps to get the application up and running on your local machine.

### Prerequisites

- Node.js

### Installation

1. **Clone the Repository**

   ```bash
   git clone git@github.com:dandheedge/resize-grayscale.gi
   cd resize-grayscale
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Create Images Folder**
   ```bash
   mkdir images
   ```
4. **Run The Application**
    ```bash
    node app.js
    ```

### Usage
1. Place your images in the images folder.
2. Run the application using the command node app.js.
3. Processed images will be available in the specified output directory.
