import { Injectable } from '@angular/core';
import { Book } from "../models/Book";
import { of } from "rxjs/internal/observable/of";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Book[] = [{
    id: '631567f0-331f-4458-b9d3-5d4e6c1f549a',
    name: 'Выразительный JavaScript',
    author: 'Marijn Haverbeke',
    description: 'Lorem ipsum',
    link: [
      {
        type: 'epub',
        link: 'link'
      },
      {
        type: 'pdf',
        link: 'link'
      }
    ]
  }]

  constructor() { }

  getBooks() {
    return of(this.books);
  }

  getBookById(id: string) {
    const book = this.books.find(book => book.id === id);
    return of(book);
  }

  addBook(book: Book) {
    this.books.push(book);
    return of(book);
  }

  editBook(book: Book) {
    this.books = this.books.map(item => {
      if (item.id === book.id)  {
        item = book
      }
      return item
    });
    return of(book);
  }
  deleteBook(id: string) {

  }
}
