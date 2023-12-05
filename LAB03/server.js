const http = require("http");
const url = require("url");

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Parse the request URL
  const parsedUrl = url.parse(req.url, true);

  // Extract query parameters
  const { method, x, y } = parsedUrl.query;

  // Check if method, x, and y are provided
  if (method && x && y) {
    const numX = parseFloat(x);
    const numY = parseFloat(y);

    if (!isNaN(numX) && !isNaN(numY)) {
      let result;

      // Perform the specified math operation
      switch (method) {
        case "add":
          result = numX + numY;
          break;
        case "subtract":
          result = numX - numY;
          break;
        case "multiply":
          result = numX * numY;
          break;
        case "divide":
          if (numY === 0) {
            res.statusCode = 400; // Bad Request
            res.end("Error: Division by zero");
            return;
          }
          result = numX / numY;
          break;
        default:
          res.statusCode = 400; // Bad Request
          res.end("Error: Invalid method");
          return;
      }

      // Send the response with the calculated result
      res.statusCode = 200; // OK
      res.setHeader("Content-Type", "text/plain");
      res.end(`${numX} ${method} ${numY} = ${result}`);
    } else {
      res.statusCode = 400; // Bad Request
      res.end("Error: Invalid numbers");
    }
  } else {
    res.statusCode = 400; // Bad Request
    res.end("Error: Missing parameters");
  }
});

// Start the server on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
