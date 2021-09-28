class SchoolService {
    constructor(port){
        this.port = port
    }

    getSchools(){
        fetch(this.port + "/schools")
        .then(response => response.json())
        .then(json => {
            json.forEach(element=>{
                debugger})
        })
    }
}