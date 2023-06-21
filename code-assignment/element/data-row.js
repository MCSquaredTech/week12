import { Books } from '../class/books.js'; 

export class DataRow extends BaseElement { 
    constructor(jSonData, tbElement) { 
        super();
        this.dataArray = jSonData; 
        this.element = tbElement;
    }

    displayBooks(book) { 
      $(this.element);
      const books = new Books(); 
      this.dataArray.forEach((b) => {
        books.add(b.id, b.ISBN10, b.PublisherDate, b.Title, b.URL, b.Author, b.Description, b.Image, b.price);
      })
      for (let book of books) { 
        book.prependToElement('tbody');
      }
    } 
}