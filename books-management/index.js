var Book = /** @class */ (function () {
    function Book(title, author, publicationYear, genre, isAvailable) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
        this.genre = genre;
        this.isAvailable = isAvailable;
    }
    Book.prototype.showInformations = function () {
        return console.table(this);
    };
    Book.prototype.lendBook = function () {
        if (!this.isAvailable) {
            console.log("You can't lend this book because it's already lended. Please contact the library in a few days.");
        }
        this.isAvailable = false;
        return 'The book was successfully lended 🥳';
    };
    Book.prototype.returnBook = function () {
        if (this.isAvailable) {
            return console.log('The book is already in the library. Please contact the library. ☎️');
        }
        this.isAvailable = true;
        return 'The book was successfully returned.';
    };
    return Book;
}());
var book1 = new Book("1984", "George Orwell", "1949", "Fiction", true);
var book2 = new Book("The Hobbit", "J.R.R. Tolkien", "1937", "Fantasy", false);
book1.showInformations();
console.log(book1.lendBook());
console.log(book1.lendBook()); // Tentando emprestar novamente
console.log(book1.returnBook());
console.log(book1.returnBook()); // Tentando devolver novamente
