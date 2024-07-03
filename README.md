# NodeJsFirst

## Simple HTTP Server

This project is a simple HTTP server built with Node.js. It serves different HTML files based on the URL path requested by the client. The server listens on port 8080 (or a port specified in the environment variable PORT) and returns the corresponding HTML file for the following routes:

/ (Home)
/about (About)
/contact-me (Contact Me)
Any other URL returns a 404 error page.

## Fork the project on Replit:

https://replit.com/@Joadelvecchio/NodeJsFirst

## Open the forked project in Replit.

In the shell, run:

npm run dev

## Project Structure

server.js: The main server file that handles HTTP requests and serves HTML files.
index.html: The home page HTML file.
about.html: The about page HTML file.
contact-me.html: The contact me page HTML file.
404.html: The 404 error page HTML file.
