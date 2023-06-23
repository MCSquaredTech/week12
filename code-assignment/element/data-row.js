
import { Books } from "../class/books.js";
import { BookDisplay } from "../class/book-display.js";
import { BookDataService } from "../data-service/book-data-service.js";

export class TableDataRow { 
    constructor(element) { 
        this.deleteFlag = false;
        this.element = element;
    }

    dbGetBooks(book) { 
      BookDataService.getBooks().then( books => this.displayAll(books));
    } 

    dbGetBook(id) { 
      BookDataService.getBookByID(id).then(book => this.displayBook(book));
    }

    displayAll(books) {
      $(this.element).empty();
      this.books = new Books(); 

      for (let book of books) {
        this.books.addObjects(book);
        this.books.book.appendToElement($(this.element));
        this.eventDelete(book);
        this.eventSelect(book);
      }
    }

    displayBook(book) {
        const bookItems = new BookDisplay(book);
        $('#right-div').removeClass('toggle-hide');
        $('#right-div').addClass('toggle-show');
        $('#right-div').empty();
        bookItems.appendToElement($('#right-div'));
    }

    eventDelete(book) { 
      $(`#${book.id}-delete`).on('click', () => {
        deleteFlag = true;
        console.log('delete book with row-index id:', book.id);
        
      });
    }

    eventSelect(book) {
      $(`#${book.id}-selected`).on('click', () => {
        $(`#${book.id}-selected`).addClass('table-active').siblings().removeClass('table-active');
        $('#edit').removeClass('disabled');
        $('#delete').removeClass('disabled');
        this.dbGetBook(book.id);
      })
     
    }   
}