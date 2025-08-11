// const catMe = require('cat-me')
// // This code imports the 'cat-me' package and uses it to log a random cat fact to the console
// console.log(catMe())



// Import the built-in 'http' module to create an HTTP server
const http = require('http')

// Create the HTTP server and define the request handler
const server = http.createServer((req, res) => {
    // Routing logic based on the request URL

    // Home page route
    if (req.url == '/') {
        res.end("This is the home page")
    }

    // Login page route
    if (req.url == '/login') {
        res.end("This is the login page")
    }

    // Admin login page route
    if (req.url == '/login/admin') {
        res.end("This is the admin login page")
    }

    // Signup page route
    if (req.url == '/signup') {
        res.end("This is the signup page")
    }

    // Profile page route
    if (req.url == '/profile') {
        res.end("This is the profile page")
    }

    // About page route
    if (req.url == '/about') {
        res.end("This is the about page")
    }

    // Contact page route
    if (req.url == '/contact') {
        res.end("This is the contact page")
    }
})

// Start the server and listen on port 3000
server.listen(3000)

// Uncomment the following lines to log a message when the server starts
// server.listen(3000, () => {
//     console.log('Server is running on port 3000')
// })
