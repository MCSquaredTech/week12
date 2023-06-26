
export class BookDataService {

    static url = 'https://64922cad428c3d2035cff2d4.mockapi.io/Books';

    static getBooks() { 
        return $.get(this.url);
    }

    static getBookByID(id) { 
        return $.get(this.url + `/${id}`);
    }

    static createBook(book) {
        return $.post(this.url, book)
    }

    static updateBook(book) { 
        return $.ajax({
            url: this.url + `/${book.id}`, 
            dataType: 'json', 
        data: JSON.stringify(book),
        contentType: 'application/json', 
        type: 'PUT'
        });
    }

    static deleteBook(id) { 
        return $.ajax({ 
            url: this.url + `/${id}`,
            type: 'DELETE'
        })
    }
}