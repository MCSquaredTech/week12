import { BaseElement } from "../element/base-element";

export class Book extends BaseElement { 
    constructor(id, isbn, pubDate, 
                title, url, author, 
                description, image, price) {
        this.id = id; 
        this.ISBN10 = isbn; 
        this.PublisherDate = pubDate; 
        this.Title = title; 
        this.URL = url; 
        this.Author = author;
        this.Description = description; 
        this.Price = price;            
    }

    getElementString() { 
        return `
            <tr class="${this.book.id}"> 
                <td>${this.book.ISBN10}</td>
                <td>${this.book.PublisherDate}</td>
                <td>${this.book.Title}</td>
                <td>${this.book.Author}</td>
                <td>${this.book.Price}</td>
            </tr> 
        `
    }

}