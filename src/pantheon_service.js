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
        .then(response => response.json();)
        .then(data =>{
            debugger
        })
    }
}