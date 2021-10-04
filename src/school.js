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
        card.className = "card"
        card.id = `school-card-${this.id}`

        card.innerHTML= `<img src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Empedocles_in_Thomas_Stanley_History_of_Philosophy.jpg" style="width:100%">`
        const philosopherList = document.createElement('ul')

        this.philosophers.forEach(p =>{
            const li = document.createElement('li');
            li.innerHTML = p.name; 
            philosopherList.appendChild(li);
        });

        const info = document.createElement('div')
        info.className = "container"
        info.innerHTML = `<h2 class="card-name"><b>${this.name}</b></h2>`
        info.appendChild(philosopherList);
        card.appendChild(info)
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
            btn.dataset['id'] = p.id
            btn.id = `philo-btn-${p.id}`
            btn.innerHTML = p.name 

            btn.addEventListener('click', function(e){
                const philosopher = Philosopher.all.find(function(p){return p.id === parseInt(e.target.dataset.id)})
                philosopher.renderShowView();
            })
            return btn
        })

        mainDiv.appendChild(backBtn)
        mainDiv.appendChild(school.element)
        philoBtns.forEach(button => mainDiv.appendChild(button))
    }

}