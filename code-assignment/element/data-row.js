
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

    dbCreateBook(book) { 
      BookDataService.createBook(book).then(books => BookDataService.getBooks()
              .then(books => this.displayBooks(books)));
    }

    dbDeleteBook(id) { 
      BookDataService.deleteBook(id).then(books => BookDataService.getBooks()
                            .then(() => this.closeRight()));
    }

    dbUpdateBook(book) { 
      BookDataService.updateBook(book).then(books => BookDataService.getBooks()
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

    closeRight() { 
      $('#right-div').removeClass('toggle-show');
      $('#right-div').addClass('toggle-hide');
      $('#carousel-toggle').show(); 
      $('#edit').addClass('disabled');
      $('#delete').addClass('disabled');
      $('#add').removeClass('disabled');
      this.dbGetBooks();
    }

    eventClose() {
      $('#close-button').on('click', () => {
          this.closeRight();
        });
        
    }

    eventSave(add) { 
     $('#form-book').on('submit', async (e) => {
        e.preventDefault();

        let book = add.getBook();
        this.dbCreateBook(book);
        
        $('#left-div').removeClass('toggle-show');
        $('#left-div').addClass('toggle-hide');
        $("#left-div").empty();

      });
    }

    eventUpdate(edit) {
      $('#form-book').on('submit', async (e) => {
        e.preventDefault();

        let book = edit.updateBook();
        this.dbUpdateBook(book);

        $('#left-div').removeClass('toggle-show');
        $('#left-div').addClass('toggle-hide');
        $("#left-div").empty();
      })
      
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
      $(`#delete`).on('click', () => {

        this.dbDeleteBook(book.id);
      });
    }

    eventEdit(book) { 
      const editBook = new AddBook();
      $('#edit').on('click', () => { 
        this.closeRight();
        $('#left-div').removeClass('toggle-hide');
        $('#left-div').addClass('toggle-show');
        $("#left-div").empty()

        editBook.appendToElement($('#left-div'));
        editBook.editBook(book);
        this.eventUpdate(editBook);

      });
    }

    eventSelect(book) {
      $(`#${book.id}-selected > td`).on('click', () => {
        $(`#${book.id}-selected`).addClass('table-active').siblings().removeClass('table-active');
        $('#edit').removeClass('disabled');
        $('#delete').removeClass('disabled');
        $('#add').addClass('disabled');
        this.eventDelete(book);
        this.eventEdit(book);
        this.dbGetBook(book.id);
      })    
    }   
}