import { Book } from "./book";
import { BaseElement } from "../element/base-element";

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
        this_id = value
    }

    get nextId() {
        return ++this.id;
    }

    get book() { 
        return this._book
    }
    set book(value) { 
        this._book = value;
    }

    add(isbn, pubDate, title, 
            url, author, description, 
            image, price) { 
        this.bookArray.push(new Book(this.nextId, isbn, pubDate, 
                    title, url, author, description, image, price));
    }

}