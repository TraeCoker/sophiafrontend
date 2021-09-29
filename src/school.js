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

    render(){
        const philosopherList = document.createElement('ul')

        this.philosophers.forEach(p =>{
            const li = document.createElement('li');
            li.innerHTML = p.name; 
            philosopherList.appendChild(li);
        });

        this.element.innerHTML = `<h2 class="school-name">${this.name}</h2>`
        this.element.appendChild(philosopherList);

        return this.element
    }
}