interface Book {
    isbn: string,
    title: string,
    year: number,
    author: string
}

export interface BookState {
    books: Book[]
}