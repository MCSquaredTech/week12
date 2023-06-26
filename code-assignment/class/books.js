import { Book } from "./book.js";

export class Books { 
    constructor() {
        this._id; // current id
        this._book; // selected book 
        this.bookArray = [];
    }

    get id() { 
        return this._id;
    }
    set id(value) { 
        this._id = value;
    }

    get nextId() {
        return ++this.id;
    }

    get book() { 
        return this._book;
    }
    set book(value) { 
        this._book = value;
    }

    addObjects(obj) { 
        const b  = new Book(obj.id, obj.ISBN10,  obj.PublisherDate, obj.Title, 
            obj.URL, obj.Author, obj.Description, obj.Image, obj.Price);
        this.bookArray.push(b);
        this.book = b;
    }

    addNew(id, isbn, pubDate, title, 
        url, author, description, image, price) { 
        const b = new Book(id, isbn, pubDate, 
            title, url, author, description, image, price); 
        this.bookArray.push(b);
        this.book = b;
    }

    

}