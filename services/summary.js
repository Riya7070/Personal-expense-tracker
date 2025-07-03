const moment = require('moment');

// Function to generate daily summary
const generateDailySummary = (expenses) => {
    console.log('Generating daily summary...');
    const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    console.log(`Total spent today: ${totalSpent}`);
    // You can also send this summary via email or save it to a file
};

// Function to generate weekly summary
const generateWeeklySummary = (expenses) => {
    console.log('Generating weekly summary...');
    const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    console.log(`Total spent this week: ${totalSpent}`);
};

// Function to generate monthly summary
const generateMonthlySummary = (expenses) => {
    console.log('Generating monthly summary...');
    const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    console.log(`Total spent this month: ${totalSpent}`);
};

// Exporting the summary generation functions
module.exports = {
    generateDailySummary,
    generateWeeklySummary,
    generateMonthlySummary,
};
