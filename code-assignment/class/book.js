import { BaseElement } from "../element/base-element.js";
import { TableDataRow } from "../element/data-row.js";

export class Book extends BaseElement { 
    constructor(id, isbn, pubDate, title, url, author, description, image, price) {
        super();
        this.id = id; 
        this.ISBN10 = isbn; 
        this.PublisherDate = pubDate; 
        this.Title = title; 
        this.URL = url; 
        this.Author = author;
        this.Description = description; 
        this.Image = image;
        this.Price = price;            
    }

    getElementString() { 
        return `
            <tr id="${this.id}-selected" class="tb"> 
                <td class="${this.id}-td-i">${this.ISBN10}</td>
                <td class="${this.id}-td-pd">${this.PublisherDate}</td>
                <td class="${this.id}-td-t">${this.Title}</td>
                <td class="${this.id}-td-a">${this.Author}</td>
                <td class="${this.id}-td-p">$${this.Price}</td>
            </tr> 
        `;
    }
}