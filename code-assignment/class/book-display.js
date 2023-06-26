import { BaseElement } from "../element/base-element.js";

export class BookDisplay extends BaseElement { 
    constructor(book) { 
        super()
        this.book = book; 
    }

    get title() { 
        return this.book.Title.split(':')[0];
    }

    getElementString() { 
        return `
        <div class="card" style="width: 18rem;">
            <img src="${this.book.Image}" class="card-img-left" alt="${this.book.title}">
            
        </div> 
        <div class="card-body">
            <h5 class="card-title">${this.title}</h5>
            <p class="card-text">${this.book.Description}</p>
            <button id="close-button" class="btn btn-primary">Close</button>
        </div>

    `
    }

}