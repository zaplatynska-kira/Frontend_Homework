const library = [];

let inputDate = prompt('Enter book data separate by ";"');
// '123456789;Gold Fish;A.S. Pushkin;1820'
// console.log('isbn;title;author;year'.split(';'));

while (inputDate) {
    // TODO
    const bookData = inputDate.split(';');
    const [isbn, title, author, year] = bookData;
    if (
        // Проверяем корректную длину введённых данных
        bookData.length === 4 &&
        // Проверяем данные на пустоту
        // bookData[0] &&
        // bookData[1] &&
        // bookData[2] &&
        // bookData[3] &&
        isbn && title && author && year &&
        // Проверяем книгу по isbn на уникальность в library
        findBook(isbn) === -1
    ) {
        library.push({
            // isbn: isbn,
            // title: title,
            // author: author,
            // year: year,
            isbn,
            title,
            author,
            year
        })
    }
    inputDate = prompt('Enter book data separate by ";"');
}

function printLibrary() {
    // TODO
    for (let i = 0; i < library.length; i++) {
        console.log(library[i]);
    }
}

printLibrary();

function findBook(isbn) { // return index of this book or -1 if book not exist
    // TODO
    for (let i = 0; i < library.length; i++) {
        if (isbn === library[i].isbn) {
            return i;
        }
    }
    return -1;
}