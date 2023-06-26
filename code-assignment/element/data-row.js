
import { Books } from "../class/books.js";
import { BookDisplay } from "../class/book-display.js";
import { AddBook } from "../class/add-book-form.js";
import { BookDataService } from "../data-service/book-data-service.js";

export class TableDataRow { 
    constructor(element) { 
        this.deleteFlag = false;
        this.element = element;
    }

    dbGetBooks(book) { 
      BookDataService.getBooks().then( books => this.displayBooks(books));
    } 

    dbGetBook(id) { 
      BookDataService.getBookByID(id).then(book => this.displayBook(book));
    }

    dbcreateBook(book) { 
      BookDataService.createBook(book).then(BookDataService.getBooks()
              .then(books => this.displayBooks(books)));
    }

    displayBooks(books) {
      $(this.element).empty();
      this.books = new Books(); 

      for (let book of books) {
        this.books.addObjects(book);
        this.books.book.appendToElement($(this.element));
        this.eventAdd();
        this.eventSelect(book);
      }
    }

    displayBook(book) {
        const bookItems = new BookDisplay(book);
        $('#right-div').removeClass('toggle-hide');
        $('#right-div').addClass('toggle-show');
        $('#right-div').empty();
        bookItems.appendToElement($('#right-div'));
        $('#carousel-toggle').hide();
        this.eventClose();
    }

    eventClose() {
        $('#close-button').on('click', () => {
        $('#right-div').removeClass('toggle-show');
        $('#right-div').addClass('toggle-hide');
        $('#carousel-toggle').show(); 
        $('#edit').addClass('disabled');
        $('#delete').addClass('disabled');
        $('#add').removeClass('disabled');
        this.dbGetBooks()
        });
        
    }

    eventSave(add) { 
     $('#form-book').on('submit', async (e) => {
        e.preventDefault();

        let book = add.getBook();
        this.dbcreateBook(book);
        
        $('#left-div').removeClass('toggle-show');
          $('#left-div').addClass('toggle-hide');
          $("#left-div").empty();

      });
    }

    eventAdd() { 
      const addBook = new AddBook();
        $('#add').on('click', () => {
          $('#left-div').removeClass('toggle-hide');
          $('#left-div').addClass('toggle-show');
          $("#left-div").empty();

          addBook.appendToElement($('#left-div'));
          this.eventSave(addBook);
          
        });
    }
    eventDelete(book) { 
      $(`#${book.id}-delete`).on('click', () => {
        deleteFlag = true;
        console.log('delete book with row-index id:', book.id);
        
      });
    }

    eventSelect(book) {
      $(`#${book.id}-selected > td`).on('click', () => {
        $(`#${book.id}-selected`).addClass('table-active').siblings().removeClass('table-active');
        $('#edit').removeClass('disabled');
        $('#delete').removeClass('disabled');
        $('#add').addClass('disabled');
        this.dbGetBook(book.id);
      })
     
    }   
}