class Pantheon {

    static renderPantheonForm(){
        modal.main.innerHTML = `
        <h1>Create a new Pantheon</h1>
        <form id="pantheon-form">
        </form>
        `
        const form = document.getElementById("pantheon-form")
        Philosopher.all.forEach((p) => {
            const label = document.createElement("label")
            label.innerHTML = `<input type="checkbox" name="${p.name} value="${p.name}"><span>${p.name}</span>`
            form.appendChild(label)
        })
        modal.open();
    }
}