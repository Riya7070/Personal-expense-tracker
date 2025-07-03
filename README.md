# Personal Expense Tracker API

This is a simple Node.js application that allows users to manage their personal expenses. The application allows users to:
- Log new expenses.
- Retrieve expenses filtered by category or date range.
- Analyze spending patterns.
- Generate daily/weekly/monthly summaries via cron jobs.

## Features
- Add a new expense (category, amount, date).
- Retrieve expenses based on filters like category or date range.
- Analyze spending patterns (e.g., highest spending categories, monthly totals).
- Generate automated reports (daily, weekly, monthly).

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Endpoints](#endpoints)

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js installed (preferably version 14 or higher).
- npm (Node package manager) installed.

## Installation

1. Clone the repository:
    ```bash
    git clone https://https://github.com/BavithSuvarna/Personal-Expense-Tracker
    ```
2. Navigate into the project folder:
    ```bash
    cd expense-tracker-api
    ```
3. Install the required dependencies:
    ```bash
    npm install
    ```

## Configuration
- By default, the application will run on port `3001`. If you want to change the port, you can update the value of `PORT` in the `.env` file or directly in the code.

## Running the Application
1. Start the server by running:
    ```bash
    npm start
    ```
    This will start the server and you should see the message: `Server running on port 3001`.

2. Access the application through your browser or Postman by navigating to:
    - `http://localhost:3001` for the home route.
    - `http://localhost:3001/expenses` for the expenses endpoints.

## Endpoints

### `POST /expenses`
- **Description**: Add a new expense.
- **Body Parameters**:
    - `category` (string): The category of the expense (e.g., "Food", "Travel").
    - `amount` (number): The amount of the expense.
    - `date` (string): The date the expense occurred (ISO 8601 format).
- **Example Request**:
    ```json
    {
      "category": "Food",
      "amount": 50,
      "date": "2024-12-04"
    }
    ```
- **Response**:
    ```json
    {
      "status": "success",
      "data": {
        "id": 1,
        "category": "Food",
        "amount": 50,
        "date": "2024-12-04T00:00:00.000Z"
      }
    }
    ```

### `GET /expenses`
- **Description**: Retrieve all expenses, optionally filtered by category or date range.
- **Query Parameters**:
    - `category` (optional, string): Filter by category.
    - `startDate` (optional, string): Filter by start date (ISO 8601 format).
    - `endDate` (optional, string): Filter by end date (ISO 8601 format).
- **Example Request**:
    ```
    GET /expenses?category=Food&startDate=2024-12-01&endDate=2024-12-31
    ```
- **Response**:
    ```json
    {
      "status": "success",
      "data": [
        {
          "id": 1,
          "category": "Food",
          "amount": 50,
          "date": "2024-12-04T00:00:00.000Z"
        }
      ]
    }
    ```

### `GET /expenses/analysis`
- **Description**: Analyze spending patterns, such as the highest spending category or monthly totals.
- **Example Request**:
    ```
    GET /expenses/analysis
    ```
- **Response**:
    ```json
    {
      "status": "success",
      "data": {
        "highestSpendingCategory": "Food",
        "totalSpent": 500
      }
    }
    ```

### `GET /expenses/summary`
- **Description**: Generate a weekly/monthly summary of expenses.
- **Response**:
    ```json
    {
      "status": "success",
      "data": {
        "weeklyTotal": 300,
        "monthlyTotal": 1200
      }
    }
    ```
