class Book {
    
    title: string;
    author: string;
    publicationYear: string;
    genre: string;
    isAvailable: boolean;

    
    constructor(
        title: string,
        author: string,
        publicationYear: string,
        genre: string,
        isAvailable: boolean,
    ){
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
        this.genre = genre;
        this.isAvailable = isAvailable;
    }
     
    showInformations(): void {
        return console.table(this)
    }

    lendBook(): string {
        if(!this.isAvailable) {
            console.log("You can't lend this book because it's already lended. Please contact the library in a few days.")
        }

        this.isAvailable = false;

        return 'The book was successfully lended 🥳';
    }

    returnBook() {
        if(this.isAvailable) {
            return console.log('The book is already in the library. Please contact the library. ☎️');
        }

        this.isAvailable = true
        return 'The book was successfully returned.';
    }

}

const book1 = new Book("1984", "George Orwell", "1949", "Fiction", true);
const book2 = new Book("The Hobbit", "J.R.R. Tolkien", "1937", "Fantasy", false);

book1.showInformations();
console.log(book1.lendBook());
console.log(book1.lendBook()); // Tentando emprestar novamente
console.log(book1.returnBook());
console.log(book1.returnBook()); // Tentando devolver novamente
