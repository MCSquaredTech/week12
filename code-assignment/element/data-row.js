
import { Books } from "../class/books.js";
import { BookDataService } from "../data-service/book-data-service.js";

export class TableDataRow { 
    constructor(element) { 
        
        this.element = element;
    }

    dbGetBooks(book) { 
      BookDataService.getBooks().then( books => this.display(books));
    } 

    display(books) {
      $(this.element).empty();
      this.books = new Books(); 

      for (let book of books) {
        this.books.add(book.id, book.ISBN10, book.PublisherDate, book.Title, book.URL, book.Author, book.Description, book.Image, book.Price)
        this.books.book.appendToElement($(this.element));
        this.eventDelete(book);
        this.eventSelect(book);
      }
    }

    eventDelete(book) { 
      $(`#${book.id}-delete`).on('click', () => {
        console.log('delete book with row-index id:', book.id);
        
      });
    }

    eventSelect(book) {
      $(`#${book.id}-selected`).on('click', () => {
        $(`#${book.id}-selected`).addClass('table-active').siblings().removeClass('table-active');
        console.log(book.Title, 'Selected')
        this.books.id = book.id; 
        console.log('You have selected row-index id:', this.books.id)
      })
    }

    
}