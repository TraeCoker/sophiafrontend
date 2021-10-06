class InquiryService {

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