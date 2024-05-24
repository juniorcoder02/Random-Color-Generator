# Random Color Generator

This project is a simple web application that generates random colors and displays them on the screen. When the user clicks the "Click me" button, the background color of the box changes to a randomly generated color, and the RGB code of that color is displayed.

## Files

The project consists of the following files:

1. **index.html**: The HTML file that contains the structure of the web page.
2. **style.css**: The CSS file that styles the web page.
3. **script.js**: The JavaScript file that adds interactivity to the web page.

## File Descriptions

### index.html

This file contains the basic structure of the web page, including links to the CSS and JavaScript files.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Random Color Generator</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <h1>Random Color Generator</h1>
    <div class="box"></div>
    <div class="color-code"></div>
    <button>Click me</button>
    <script src="script.js"></script>
  </body>
</html>
```

### style.css

This file contains the styles for the web page elements.

```css
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Ubuntu", sans-serif;
}
h1 {
  font-size: 30px;
  text-align: center;
  margin-top: 2rem;
}
.box {
  width: 600px;
  height: 300px;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  margin: 2rem auto 0 auto;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.8);
}
.color-code {
  width: 400px;
  height: 100px;
  border-radius: 10px;
  margin: 1rem auto 0 auto;
  text-align: center;
  padding-top: 3rem;
  color: black;
  font-size: 2rem;
  font-weight: bold;
}
button {
  outline: none;
  border: none;
  background-color: rgba(9, 154, 211, 0.775);
  color: white;
  width: 100px;
  height: 50px;
  border-radius: 10px;
  margin-left: 45%;
  box-shadow: 0 5px 5px rgba(0, 0, 0);
  font-size: 1rem;
}
```

### script.js

This file contains the JavaScript code that handles the click event on the button and changes the color of the box and the text displaying the RGB code.

```javascript
let btn = document.querySelector("button");
let txt = document.querySelector(".color-code");
let box = document.querySelector(".box");

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random()
```

### Usage

To use the Random Color Generator, open the index.html file in your web browser. Click the "Click me" button to generate a random color. The box will change to a new random color, and the RGB code of the color will be displayed below the box.

### License

This project is licensed under the MIT License.

### Acknowledgments

Fonts by [Google Fonts](https://fonts.google.com/)
