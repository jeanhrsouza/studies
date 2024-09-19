## Problem Description:
You were hired to develop a simple book management system for a small library. Your task is to create a class called **Book**, which will be used to represent the books available in the library. Each book has some important characteristics (attributes) and should perform some basic actions (methods).

## Requirements:
### Book Class Attributes:
- Title (<span style="color:green">title</span>): The name of the book.

- Author (<span style="color:green">author</span>): The name of the book's author.

- Year of Publication (<span style="color:green">yearPublished</span>): The year the book was published.

- Genre (<span style="color:green">genre</span>): The literary genre of the book (e.g., Fiction, Non-fiction, Fantasy, etc.).

- Available (<span style="color:green">available</span>): A boolean attribute that indicates if the book is available for loan (true) or if it has already been loaned out (false).


### Methods of the **Book** Class:
- Display Information (<span style="color:green">displayInformation()</span>): A method that displays all the book's information in the console.

- Loan Book (<span style="color:green">loanBook()</span>): A method that changes the book's status to unavailable (available = false) if the book is still available.

- Return Book (<span style="color:green">returnBook()</span>): A method that changes the book's status to available (available = true) when the book is returned.


## Task:
### Creation of the <span style="color:green">Book</span> Class:
- Define the <span style="color:green">Book</span> class with the specified attributes.

- Create a constructor that initializes all attributes when a new book is created.


### Method Implementation:
- Implement the <span style="color:green">displayInformation()</span> method to show the book's details in the console.

- Implement the <span style="color:green">loanBook()</span> method to change the book's availability status and indicate in the console that the book has been loaned.

- Implement the <span style="color:green">returnBook()</span> method to change the book's availability status and indicate in the console that the book has been returned.


### Object Creation:
- Create at least two <span style="color:green">Book</span> objects using the class you developed, each representing a different book.

- Use the methods created to display the information of the books, loan one of the books, and then return the same book.
