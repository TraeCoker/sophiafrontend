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
        //this.element.addEventListener('click', this.renderShowView)
        School.all.push(this)
    }

    renderCard(){
        const card = document.createElement('div')
        card.id = `school-card-${this.id}`

        const philosopherList = document.createElement('ul')

        this.philosophers.forEach(p =>{
            const li = document.createElement('li');
            li.innerHTML = p.name; 
            philosopherList.appendChild(li);
        });

        card.innerHTML = `<h2 class="school-name">${this.name}</h2>`
        card.appendChild(philosopherList);
        card.addEventListener('click', this.renderShowView)
        return card
    }

    static attachToDom(){
        this.all.forEach(school => mainDiv.appendChild(school.renderCard()));
    }

    renderShowView(e){
        mainDiv.innerHTML = ""
        const clickedDiv = this
        const school = School.all.find(function(s){return s.id === parseInt(clickedDiv.id.split('-')[2])})
        
        mainDiv.appendChild(school.element)
    }
}