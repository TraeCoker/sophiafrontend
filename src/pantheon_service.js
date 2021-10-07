class PantheonService {

    constructor(port){
        this.port = port
    }

    createPantheon(newPantheon){
        const configObject = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(newPantheon)
        }

        fetch(this.port + '/pantheons', configObject)
        .then(response => response.json())
        .then(data =>{

            if (data.error){
            const form = document.querySelector("form")
            form.firstElementChild.innerHTML = "Name Unavailable"
            form.name.className = "form-error";
            } else {
            const p = new Pantheon(data);

            p.generateInquiry();
            p.renderShowView();
            modal.close();}
        })
        .catch()
    }
    
    getPantheons(){
        fetch(this.port + "/pantheons")
        .then(response => response.json())
        .then(json => {
            json.forEach(element=>{
                const p = new Pantheon(element)
                p.generateInquiry();
            })
        })
    }
}