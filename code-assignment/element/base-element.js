export class BaseElement { 
    constructor() { 
        this.element = null; // JQuery object 
    }

    prependToElement(el) { 
        this.createElement();
        el.perdend(this.element);
    }
    
    appendToElement(el) { 
        this.createElement(); 
        el.append(this.element); 
    }

    createElement() { 
        let s = this.getElementString(); 
        this.element = $(s); 
    }

    getElementString() { 
        throw 'Please override getElementString() in BaseElement';
    }
}