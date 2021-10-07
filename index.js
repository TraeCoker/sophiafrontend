const port = "http://localhost:3000";
const philosopherServiceCall = new PhilosopherService(port);
const schoolServiceCall = new SchoolService(port);
const inquiryServiceCall = new InquiryService(port);
const pantheonServiceCall = new PantheonService(port);
const homeDiv = document.getElementById("home");
const mainDiv = document.getElementById("main");
const modal = new Modal();
const navBar = document.getElementById("nav")

philosopherServiceCall.getPhilosophers();
schoolServiceCall.getSchools();
inquiryServiceCall.getInquiries();
pantheonServiceCall.getPantheons();


homeDiv.addEventListener('click', function(e){
    if(e.target.id === "schl_img"){
        homeDiv.style.display = "none"
        navBar.style.display = "block"
        School.attachToDom();
    } else if(e.target.id === "pthn_img"){
        homeDiv.style.display = "none"
        navBar.style.display = "block"
        Pantheon.attachToDom();
    } else if (e.target.id === "new_pthn_img"){
        Pantheon.renderPantheonForm();
    }})

    navBar.addEventListener('click', function(){
        mainDiv.innerHTML = ""
        homeDiv.style.display = "block"
        navBar.style.display = "none"
    })