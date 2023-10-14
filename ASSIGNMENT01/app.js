const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3000;

const publicDirectory = path.join(__dirname, 'public');
const viewsDirectory = path.join(__dirname, 'views');

// Set up handlebars engine
app.engine('hbs', handlebars({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(viewsDirectory, 'layouts'),
    partialsDir: path.join(viewsDirectory, 'partials')
}));

app.set('view engine', 'hbs');
app.set('views', viewsDirectory);

// Serve static files
app.use(express.static(publicDirectory));

// Define routes
app.get('/', (req, res) => {
    res.render('home', { title: 'Home Page' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page' });
});

app.get('/project', (req, res) => {
    res.render('project', { title: 'Project Page' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Page' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
