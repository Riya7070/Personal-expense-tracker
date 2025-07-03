const categories = ['Food', 'Travel', 'Utilities', 'Entertainment', 'Others'];

const validateExpense = (category, amount, date) => {
    if (!categories.includes(category)) return 'Invalid category';
    if (typeof amount !== 'number' || amount <= 0) return 'Amount must be a positive number';
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return 'Invalid date format (YYYY-MM-DD)';
    return null;
};

module.exports = { validateExpense };
