class Pantheon {
    static all = [];

    constructor({name, id, philosophers}){
        this.name = name 
        this.id = id 
        this.philosophers = philosophers
        this.element = document.createElement('div');
        this.element.dataset['id'] = id;
        this.element.id = `pantheon-${this.id}`
        this.element.innerHTML = `${this.name}`
        Pantheon.all.push(this)
    }

    renderShowView(e){
       const query = [] 
       if (arguments.length === 1){
            query.push(Pantheon.all.find(function(p){return p.id === parseInt(e.target.parentElement.id.split('-')[2])}))
        } else {
            query.push(this)
        }

        const pantheon = query[0]

        homeDiv.innerHTML = ""
        mainDiv.innerText = ""

        const philoCards = pantheon.philosophers.map(function(p){
            const philosopher = Philosopher.all.find(philo => philo.id === p.id)
            const card = philosopher.renderCard();
            debugger 
            //btn.addEventListener('click', function(e){
             //   Philosopher.renderShowView(e);
           // })
           return card
        })

        mainDiv.appendChild(pantheon.element)
        philoCards.forEach(card => mainDiv.appendChild(card))
    }

    renderCard(){
        const card = document.createElement('div')
        card.className = "card"
        card.id = `pantheon-card-${this.id}`

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
        this.all.forEach(pantheon => mainDiv.appendChild(pantheon.renderCard()));
    }


    static renderPantheonForm(){
        modal.main.innerHTML = `
        <h1>Create a new Pantheon</h1>
        <form id="pantheon-form">
        <label for="name">Name your Pantheon:</label><br>
        <input type="text" name="name"><br><br><br>
        <label for="checkbox-grid">Choose 2-5 philosophers to learn from:</label>
        <p id="checkbox-grid"></p>
        </form>
        `
        const form = document.getElementById("pantheon-form")
        const grid = document.getElementById("checkbox-grid")
        Philosopher.all.forEach((p) => {
            const label = document.createElement("label")
            label.innerHTML = `<input type="checkbox" name="${p.name}" value="box-${p.id}" class="check"><span>${p.name}</span>`
            const span = label.firstElementChild.nextElementSibling
            const img = document.createElement("img")
            img.src = p.imageUrl
            img.className = "thumbnail"
            span.appendChild(img)

            label.onclick = Pantheon.selectiveCheck;
            grid.appendChild(label)
        })
        const submit = document.createElement("input");
        submit.type = "submit" 
        submit.value = "Create Pantheon"
        submit.onclick = Pantheon.selectiveSubmit;
        form.appendChild(submit)

        modal.main.querySelector("form").addEventListener('submit', this.handleSubmit)
        modal.open();
    }

    static selectiveCheck(e){
        const checked = document.querySelectorAll(".check:checked")
        const max = 5

        if (checked.length >= max +1){
            return false;
        }
    }

    static selectiveSubmit(e){
        const checked = document.querySelectorAll(".check:checked")
        const min = 2

        if (checked.length < min){
            return false
        }
    }

    static handleSubmit(e){
        e.preventDefault();
        const philosopherIds = [] 
        e.target.querySelectorAll(".check:checked").forEach(node => {
            const id = node.value.split("-")[1];
            philosopherIds.push(parseInt(id));
        })
        
        const newPantheon = {
            name: e.target.name.value,
            philosopher_ids: philosopherIds
        }
        
        pantheonServiceCall.createPantheon(newPantheon);
    }
}