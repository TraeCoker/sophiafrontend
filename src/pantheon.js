class Pantheon {

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
            label.innerHTML = `<input type="checkbox" name="${p.name} value="${p.name}"><span>${p.name}</span>`
            const span = label.firstElementChild.nextElementSibling
            const img = document.createElement("img")
            img.src = p.imageUrl
            img.className = "thumbnail"
            span.appendChild(img)
            grid.appendChild(label)
        })
        const submit = document.createElement("input");
        submit.type = "submit" 
        submit.value = "Create Pantheon"

        form.appendChild(submit)
        modal.open();
    }
}