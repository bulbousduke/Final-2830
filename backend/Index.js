const express = require('express');
const path = require('path');
const app = express();
const PORT = 5001;

// Serve the React app
app.use(express.static(path.join(__dirname, '../frontend/build')));

// API endpoint
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Catch-all route for React
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));