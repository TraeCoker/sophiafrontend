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
    

    renderShowView(){
        modal.main.innerText = ""
        
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
        info.innerHTML = `<h2 class="philosopher-card-name"><b>${this.name}</b></h2>`
        
        card.appendChild(info)
        const philosopher = this 
        return card
    }

    renderQuote(){
        const random = Math.floor(Math.random() * this.quotes.length)
        modal.main.innerText = ""
        const quote = document.createElement("div")
        quote.innerHTML = `<h3 class="quote">${this.name} says: "${this.quotes[random].passage}"</h3>`

        modal.main.appendChild(quote)
        modal.open();
    }
}