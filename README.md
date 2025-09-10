# Library Management System

This is a lightweight **Streamlit-based** web app once again that allows users to manage their personal book collection. Fun fact about me, I am an avid reader hence I 
developed my own program to track and measure how many of my books on my shelf have I finished. As of now, this system only enables adding, viewing, and analyzing books 
by genre, author, and reading status—all saved in a local CSV file.

## Features

**Add Books**: Register books by title, author, genre, and reading status.
**View Book List**: See the full list of books in a table format using Streamlit’s `data_editor`.
**Visualize Reading Status**: Pie chart that shows how many books are marked as *Complete*, *Unread*, or *In Progress*.
**Local Storage**: Books are stored in a `data.csv` file using semicolon `;` as the delimiter.

---

## How to Run It
Make sure you have the required libraries installed:
  streamlit
  pandas 
  matplotlib

Then run the app using:
  streamlit run your_file_name.py

Note: Make sure there’s a `data.csv` file in the same directory with this format (including headers):

```
Title;Genre;Author;Status
```

---

## Example Input/Output
<img width="779" height="478" alt="image" src="https://github.com/user-attachments/assets/901cff51-201c-4405-bb84-6282d495d011" />
<img width="779" height="478" alt="image" src="https://github.com/user-attachments/assets/c9fe103b-b4bf-45d0-9a52-83bfedd51d4a" />
<img width="779" height="373" alt="image" src="https://github.com/user-attachments/assets/6b2874c8-4646-4516-9c05-ec6821e4179b" />
<img width="779" height="478" alt="image" src="https://github.com/user-attachments/assets/dde476df-dbb7-4c5c-86b7-a421c1916f93" />

## Future Improvements
**Editable Table**: Implement an `edit_cell()`. Theres no current feature in which the user can edit an existing book in the table
**Search & Filter**: Add functionality to filter books by genre, author, or status.
**Sort Books**: Enable sorting by date added, title, or author.
