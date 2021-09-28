class QuoteService {
    constructor(port){
        this.port = port
    }

    getQuotes(){
        fetch(this.port + "/quotes")
        .then(response => response.json())
        .then(data => console.log(data))
    }
}