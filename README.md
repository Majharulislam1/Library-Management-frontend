# Library Management Frontend 📚

## Project Overview

This is a simple library management system built with **React**, **Redux Toolkit Query (RTK Query)**, and **TypeScript**. The system allows users to:

- View a list of books.
- Perform CRUD (Create, Read, Update, Delete) operations on books.
- Borrow books.
- View a borrow summary.

The project is designed to be minimal, focusing on essential functionalities without authentication, category filters, or payment integration.

## Features

### 1. Public Routes 🚀
- All pages are publicly accessible without login or authentication.
- Focus is on essential book and borrowing features.

### 2. Book Management 🛠️

- **Book List Table:**
  - Displays a list of all books.
  - Columns: Title, Author, Genre, ISBN, Copies, Availability, Actions.
  
- **Action Buttons/Icons:**
  - **Edit Book**: Opens a form to edit an existing book's details.
  - **Delete Book**: Confirms deletion of a book.
  - **Borrow Book**: Opens a form to borrow a book (check availability).
  - **Add New Book**: Opens a form to add a new book with fields like Title, Author, Genre, ISBN, Description, Copies, Available.
  
- **Business Logic:**
  - If copies of a book are set to 0, the book is marked as unavailable.
  - Borrowing a book reduces the available copies.
  
### 3. Borrow Book

- **Borrow Form**:
  - Opens from the “Borrow” button in the book list.
  - Fields: Quantity (number), Due Date (date).
  
- **Business Logic:**
  - The quantity cannot exceed available copies.
  - If copies reach 0, the book will be marked as unavailable.
  
- After borrowing a book, a success message is displayed and the user is redirected to the **Borrow Summary** page.

### 4. Borrow Summary

- Displays a summary of borrowed books.
- Columns: Book Title, ISBN, Total Quantity Borrowed.
- Aggregated data is retrieved from an API.

### Landing Page Components

- **Navbar**: Contains links to:
  - All Books
  - Add Book
  - Borrow Summary
  
- **Book Table/List/Grid**: Displays the list of books with actions.
- **Footer**: Displays basic site information or credits.

---

## Pages

1. **`/books`**: Displays the list of all books with actions like view, edit, delete, and borrow.
2. **`/create-book`**: A form to add a new book to the system.
3. **`/books/:id`**: Displays detailed information about a single book.
4. **`/edit-book/:id`**: Allows the user to edit an existing book's details.
5. **`/borrow/:bookId`**: A form to borrow a selected book.
6. **`/borrow-summary`**: Displays a summary of all borrowed books.

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit Query (RTK Query)**: A set of APIs to simplify data fetching and state management.
- **TypeScript**: A superset of JavaScript that provides static typing.
- **React Router**: For navigation between different pages.

---

## Getting Started

To run this project locally, follow the steps below:

### 1. Clone the repository:

```bash
git clone https://github.com/Majharulislam1/Library-Management-frontend
cd Library-management-frontend
