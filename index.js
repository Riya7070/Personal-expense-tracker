const express = require('express');
const cron = require('node-cron');
const expensesRoutes = require('./routes/expenses');
const { generateDailySummary } = require('./services/summary');

// Initialize the Express app
const app = express();

// Middleware for parsing JSON requests
app.use(express.json());

// Root route (welcome message)
app.get('/', (req, res) => {
    res.send('Welcome to the Expense Tracker API!');
});

// Mount the expenses routes
app.use('/expenses', expensesRoutes);

// Schedule a daily task at midnight
cron.schedule('0 0 * * *', generateDailySummary);

// Start the server
const PORT = process.env.PORT || 3000; // Use environment variable for flexibility
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
