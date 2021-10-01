class Philosopher {
    static all = [];

    constructor({name, id, bio, lifespan, quotes, works, school, pantheons, image_url}){
        this.name = name 
        this.id = id 
        this.bio = bio 
        this.lifespan = lifespan
        this.quotes = quotes 
        this.works = works 
        this.imageUrl = image_url
        this.school_id = school["id"]
        this.pantheons = pantheons
        this.element = document.createElement('div');
        this.element.dataset['id'] = id;
        this.element.id = `philosopher-${this.id}`
        Philosopher.all.push(this)
    }

    render(){
        this.element.innerHTML = `
        <img src="${this.imageUrl}" class="philosopher-avatar">
        <h1 class="philosopher-name-show">${this.name}</h1></h1>
        <p class="lifespan">${this.lifespan}</p>
        <p class="bio">${this.bio}</p>
        `

        const worksList = document.createElement('ul')

        this.works.forEach(w =>{
            const li = document.createElement('li');
            li.innerHTML = `<a href=${w.link} target="_blank">${w.name}</a>` 
            worksList.appendChild(li);
        });

        this.element.appendChild(worksList)
    }
    

    static renderShowView(e){
        modal.main.innerText = ""
        const philosopher = this.all.find(function(p){return p.id === parseInt(e.target.dataset.id)})
        
        modal.main.appendChild(philosopher.element)
        modal.open();
    }

    static renderFormButtons(){
        const formButtons = this.all.map(p => `<label><input type="checkbox" name="philo-box" value="${p.id}"><span>${p.name}</span></label>`)
    }
}