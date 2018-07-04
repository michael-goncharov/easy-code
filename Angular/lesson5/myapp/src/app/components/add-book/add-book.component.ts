import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BooksService } from "../../services/books.service";
import { Book } from "../../models/Book";
import { FlashMessagesService } from "angular2-flash-messages";
import { IdService } from "../../services/id.service";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  bookId: string;
  book: Book;
  constructor(
    public booksService: BooksService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public flashMessage: FlashMessagesService,
    public idService: IdService
  ) { }

  ngOnInit() {
    this.book = {
      id: '',
      name: '',
      author: '',
      description: '',
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
    };

  }

  addBook() {
    this.bookId = this.idService.generate();
    const newBook = Object.assign({}, this.book);
    newBook.id = this.bookId;
    console.log(newBook);
    this.booksService.addBook(newBook).subscribe((book: Book) => {
      if (book.name) {
        this.flashMessage.show('Task added successfully!', {
          cssClass: 'alert-success',
          showCloseBtn: true,
          closeOnClick: true,
          timeout: 10000
        });
        this.router.navigate(['/panel']);
      }
    }, error => {
      this.flashMessage.show('Task not added successfully!', {
        cssClass: 'alert-danger',
        showCloseBtn: true,
        closeOnClick: true,
        timeout: 10000
      });
    });
  }
}
