
export class BookDataService {

    static url = 'https://64922cad428c3d2035cff2d4.mockapi.io';

    static getBook() { 
        return $.get(this.url);
    }

    static getBookByID(id) { 
        return $.get(`${this.url} /${id}`);
    }
}