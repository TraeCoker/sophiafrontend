class Pantheon {
    static all = [];

    constructor({name, id, philosophers}){
        this.name = name 
        this.id = id 
        this.philosophers = philosophers
        this.element = document.createElement('div');
        this.element.dataset['id'] = id;
        this.element.id = `pantheon-${this.id}`
        this.element.innerHTML = `<h1>${this.name}</h1>`
        Pantheon.all.push(this)
    }

    generateInquiry(){
        const random = Math.floor(Math.random() * Inquiry.all.length)
        this.inquiry = Inquiry.all[random]
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
            const title = card.querySelector("h2")
            const img = card.querySelector("img")

            title.addEventListener('click', function(){
                philosopher.renderShowView();
            })

            img.addEventListener('click', function(){
                philosopher.renderQuote();
            })
           return card
        })

        const inquireButton = document.createElement("button")
        inquireButton.innerHTML = "Inquiry"
        inquireButton.className - "inquire-button"
        inquireButton.id = `btn-${pantheon.id}`
        inquireButton.addEventListener('click', function(){
            const pantheon = Pantheon.all.find(p => p.id === parseInt(this.id.split("-")[1]))
            pantheon.renderInquiry();
        })

        mainDiv.appendChild(pantheon.element)
        philoCards.forEach(card => mainDiv.appendChild(card))
        mainDiv.appendChild(inquireButton)
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

    renderInquiry(){
        modal.main.innerHTML = ""

        const instruction = document.createElement('div')
        instruction.className = "instruction"
        instruction.innerHTML = `
        <h1>Inquiry Exercise</h1>
        <p>The following instructions are designed to guide one into an optimal state for contemplation. Dialogos, the practice of meditative inquiry is a means of coming into a deep relationship with truth and meaning rather than an intellectual exercise.
 
        Take a moment to get comfortable in an upright posture.
        With your eyes closed, breathe in deeply and slowly. As you exhale slowly and fully relax any tension you feel in your body.
        Continue to listen to the sensations of your body, non-judging, merely observing. Follow the sensations of your breath as it moves in and out naturally.
        Spend a few minutes with the breath and the body in this way, relaxed but aware and observing.
        Once you feel settled into your body, present this question to your mind by saying to yourself inwardly:
        <h3>${this.inquiry.question}</h3>
        Let the words resound within you and be curious.Do not rush to immediatly answering. Rather listen inwardly and let the question reveal itself to you on a deeper level.
        Relate to the question as thought the question were a teacher with much to teach you, you only need to listen. 
        Spend 5 - 15 minutes meditating with the question in this way. Should you find your mind wandering, gently repeat the question again to yourself.
        After the time is up gently come back to your body and open your eyes.
        Spend another 5 - 15 minutes journaling about your experiences and what arises in response to this question.
        </p>`

        const completeButton = document.createElement('button')
        completeButton.innerHTML = "Complete Inquiry"
        completeButton.className = "complete-button"
        completeButton.id = `complete-${this.id}`
        completeButton.addEventListener('click', function(){
            modal.close();
            const pantheon = Pantheon.all.find(p => p.id === parseInt(this.id.split("-")[1]))
            pantheon.generateInquiry();
        })
        modal.main.append(instruction, completeButton);
        modal.open();
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
        if (e.target.name.value === ""){
            return false
        }
        
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