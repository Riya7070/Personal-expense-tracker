const express = require('express');
const { validateExpense } = require('../utils/validation');
const { analyzeSpending } = require('../services/analysis');

const router = express.Router();
let expenses = []; // In-memory storage

// Add Expense
router.post('/', (req, res) => {
    const { category, amount, date } = req.body;

    // Validate Input
    const error = validateExpense(category, amount, date);
    if (error) return res.status(400).json({ status: 'error', error });

    // Add to expenses
    const newExpense = { id: expenses.length + 1, category, amount, date };
    expenses.push(newExpense);

    res.status(201).json({ status: 'success', data: newExpense });
});

// Get Expenses
router.get('/', (req, res) => {
    const { category, startDate, endDate } = req.query;
    let filteredExpenses = expenses;

    // Filter by category
    if (category) {
        filteredExpenses = filteredExpenses.filter((exp) => exp.category === category);
    }

    // Filter by date range
    if (startDate && endDate) {
        filteredExpenses = filteredExpenses.filter((exp) => exp.date >= startDate && exp.date <= endDate);
    }

    res.json({ status: 'success', data: filteredExpenses });
});

// Analyze Spending
router.get('/analysis', (req, res) => {
    const analysis = analyzeSpending(expenses);
    res.json({ status: 'success', data: analysis });
});

module.exports = router;
