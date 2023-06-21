
export class Book { 
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

}