export type Book = {
    title: string,
    year: string,
    author: string
}

export type bookAction =
| { type: 'books/add', payload: Book }
| { type: 'books/delete', payload: string }
| { type: 'books/editTitle', payload: { isbn: string, title: string } }