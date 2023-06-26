import { BaseElement } from "../element/base-element.js";
import { Books } from "./books.js";

export class AddBook extends BaseElement { 
    constructor() { 
        super(); 
        this.book = new Books();
    }

    getBook() { 
        let formArray = document.forms['form-book'];
        this.book.addNew('', formArray.isbn.value, formArray.pubdate.value, formArray.title.value, formArray.url.value, 
                    formArray.author.value, formArray.description.value, formArray.image.value, formArray.price.value);

        return this.book.book;
        
    }

    updateBook() { 
        let formArray = document.forms['form-book'];
        this.book.ISBN10 = formArray.isbn.value; 
        this.book.PublisherDate = formArray.pubdate.value;
        this.book.Title = formArray.title.value; 
        this.book.URL = formArray.url.value;
        this.book.Author = formArray.author.value; 
        this.book.Description = formArray.description.value; 
        this.book.Image = formArray.image.value; 
        this.book.Price = formArray.price.value;

        return this.book;
    }

    editBook(book) { 
        this.book = book;
        let formArray = document.forms['form-book'];
        formArray.isbn.value = this.book.ISBN10; 
        formArray.pubdate.value = this.book.PublisherDate;
        formArray.title.value = this.book.Title; 
        formArray.url.value = this.book.URL;
        formArray.author.value = this.book.Author; 
        formArray.description.value = this.book.Description; 
        formArray.image.value = this.book.Image; 
        formArray.price.value = this.book.Price;
    }

    getElementString() { 

        return `
            <div class="book-form-control">
                <form id="form-book">
                    <div class="form-group">
                        <label for="isbn">ISBN10</label>
                        <input type="text" class="form-control" id="isbn" placeholder="ISBN Number">
                    </div>
                    <div class="form-group">
                        <label for="pubdate">Publisher's Date</label>
                        <input type="date" class="form-control" id="pubdate" placeholder="Publisher's Date">
                    </div>
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" class="form-control" id="title" placeholder="Book Titler">
                    </div>
                    <div class="form-group">
                        <label for="url">URL</label>
                        <input type="text" class="form-control" id="url" placeholder="URL to Book - Amazon?">
                    </div>
                    <div class="form-group">
                        <label for="author">Author</label>
                        <input type="text" class="form-control" id="author" placeholder="Author's Name">
                    </div>
                    <div class="form-group">
                    <label for="description">Description</label>
                    <textarea class="form-control" id="description" placeholder="Book Description"></textarea>
                    </div>
                    <div class="form-group">
                    <label for="image">Image</label>
                    <input type="text" class="form-control" id="image" placeholder="./images/no-Image-Available.png">
                    </div>
                    <div class="form-group">
                    <label for="price">Price</label>
                    <input type="text" class="form-control" id="price" placeholder="20.99">
                    </div>
                    <input id="save-book" class="btn btn-primary" type="submit">
                </form>
            </div> 
        `
    }
}