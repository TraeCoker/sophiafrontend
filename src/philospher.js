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
    

    renderShowView(e){
        modal.main.innerText = ""
        //const philosopher = this.all.find(function(p){return p.id === parseInt(e.target.dataset.id)})
        
        modal.main.appendChild(this.element)
        modal.open();
    }

    renderCard(){
        const card = document.createElement('div')
        card.className = "philosopher-card"
        card.id = `philosopher-card-${this.id}`
        card.innerHTML= `<img src="${this.imageUrl}" style="width:100%">`

        const info = document.createElement('div')
        info.className = "philosopher-container"
        info.innerHTML = `<h2 class="card-name"><b>${this.name}</b></h2>`
        
        //info.appendChild(philosopherList);
        card.appendChild(info)
        card.addEventListener('click', Philosopher.renderShowView)
        return card
    }

}