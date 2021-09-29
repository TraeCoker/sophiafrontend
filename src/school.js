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

    render(){
        this.element.innerHTML = `
        <h1 class="school-name-show">${this.name}</h1></h1>
        <p class="description">${this.description}</p>
        `
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
        mainDiv.innerText = ""
        this.all.forEach(school => mainDiv.appendChild(school.renderCard()));
    }

    renderShowView(e){
        mainDiv.innerText = ""
        const clickedDiv = this
        const school = School.all.find(function(s){return s.id === parseInt(clickedDiv.id.split('-')[2])})
        const backBtn = document.createElement('button')
        
        backBtn.innerHTML = "Back"
        backBtn.addEventListener('click', function(){
            School.attachToDom();
        });

        const philoBtns = school.philosophers.map(function(p){
            const btn = document.createElement("button");
            btn.id = `philo-btn-${p.id}`
            btn.innerHTML = p.name 

            return btn
        })

        mainDiv.appendChild(backBtn)
        mainDiv.appendChild(school.element)
        philoBtns.forEach(button => mainDiv.appendChild(button))
    }
}