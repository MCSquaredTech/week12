import { BaseElement } from "./base-element";

export class DataRow extends BaseElement { 
    constructor(jSonData, tbElement) { 
        super();
        this.dataArray = jSonData; 
        this.element = tbElement;
    }

    getElementString(book) { 
        return `
        <tr class="${book.id}-row>
            <td>${book.ISBN10}</td>
            <td>${book.PublisherDate}</td> 
            <td>${book.Title}</td> 
            <td>${book.Athor}</td>
            <td>${book.Price}</td>
        </tr>
        `
        
    } 
}