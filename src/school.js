class School {
    static all = [];

    constructor({name, id, description, philosophers}){
        this.name = name 
        this.id = id 
        this.description = description 
        this.philosophers = philosophers
        this.element = document.createElement('div');
        this.element.dataset['id'] = id;
        this.element.id = `school-${this.id}`
        School.all.push(this)
    }
}