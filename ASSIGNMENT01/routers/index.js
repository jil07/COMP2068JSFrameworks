const express = require('express');
const app = express();
const path = require('path');

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, 'public');
const viewsPath = path.join(__dirname, 'views');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// Define routes for the different pages
app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home Page',
        name: 'Jil Patel'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Jil Patel'
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact Me',
        name: 'Jil Patel'
    });
});

app.get('/project', (req, res) => {
    res.render('project', {
        title: 'Projects',
        name: 'Jil Patel'
    });
});

// Serve static assets
app.use(express.static(publicDirectoryPath));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
