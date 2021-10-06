class Inquiry {
    static all = [];

    constructor({id, question]){
        this.id = id 
        this.question = question
        this.element = document.createElement('div');
        this.element.dataset['id'] = id;
        this.element.id = `inquiry-${this.id}`
        Inquiry.all.push(this)
    }
}