interface Book {
    isbn: string,
    title: string,
    year: string,
    author: string
}

export interface BookState {
    books: Book[]
}