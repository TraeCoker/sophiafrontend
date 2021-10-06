class InquiryService {

    constructor(port){
        this.port = port
    }
    
    getInquiries(){
        fetch(this.port + "/inquiries")
        .then(response => response.json())
        .then(json => {
            json.forEach(element=>{
                const i = new Inquiry(element)
            })
        })
    }
}