const analyzeSpending = (expenses) => {
    const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0);

    const categoryTotals = expenses.reduce((totals, exp) => {
        totals[exp.category] = (totals[exp.category] || 0) + exp.amount;
        return totals;
    }, {});

    const highestCategory = Object.entries(categoryTotals).reduce((max, [category, amount]) => {
        return amount > max.amount ? { category, amount } : max;
    }, { category: null, amount: 0 });

    const monthlyTotals = expenses.reduce((months, exp) => {
        const month = exp.date.slice(0, 7); // YYYY-MM
        months[month] = (months[month] || 0) + exp.amount;
        return months;
    }, {});

    return {
        total: totalSpent,
        highestCategory,
        monthlyTotals: Object.entries(monthlyTotals).map(([month, total]) => ({ month, total })),
    };
};

module.exports = { analyzeSpending };
