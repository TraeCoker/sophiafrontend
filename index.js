const port = "http://localhost:3000";
const philosopherServiceCall = new PhilosopherService(port);
const schoolServiceCall = new SchoolService(port);
const pantheonServiceCall = new PantheonService(port);
const homeDiv = document.getElementById("home");
const mainDiv = document.getElementById("main");
const modal = new Modal();

philosopherServiceCall.getPhilosophers();
schoolServiceCall.getSchools();

homeDiv.addEventListener('click', function(e){
    if(e.target.id === "schl_btn"){
        homeDiv.innerHTML = ""
        School.attachToDom();
    } else if (e.target.id === "pthn_btn"){
        Pantheon.renderPantheonForm();
    }})
