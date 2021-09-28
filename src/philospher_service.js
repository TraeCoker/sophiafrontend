class PhilosopherService {
    constructor(port){
        this.port = port
    }

    getPhilosophers(){
        fetch(this.port + "/philosophers")
        .then(response => response.json())
        .then(json => {
            json.forEach(element=>{
                const p = new Philosopher(element)})
        })
    }
}