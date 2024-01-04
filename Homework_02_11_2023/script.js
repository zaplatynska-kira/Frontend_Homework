
const library = [];
let inputDate = prompt('Enter book data separate by ";" (ISBN;Title;Author;Year)');

while (inputDate) {
    const [isbn, title, author, year] = inputDate.split(';');

   
    if (!isbn || isNaN(isbn) || !title || !author || !year || isNaN(year)) {
        console.log('Invalid input. Please provide valid data in the format: ISBN;Title;Author;Year');
    } else {
        const book = {isbn,title,author,year};
        library.push(book);
        console.log(`Book found: ISBN: ${isbn}, Title: ${title}, Author: ${author}, Year: ${year}`);
    }

    inputDate = prompt('Enter book data separate by ";" (ISBN;Title;Author;Year)');
}


function printLibrary() {
    for (let i = 0; i < library.length; i++) {
        const book = library[i];
        console.log(`Book ${i + 1}: ISBN: ${book.isbn}, Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`);
    }
}

function findBook(isbn) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].isbn === isbn) {
            return i;
        }
    }
    return -1;
}

