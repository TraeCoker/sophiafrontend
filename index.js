const port = "http://localhost:3000";
const philosopherServiceCall = new PhilosopherService(port);
const schoolServiceCall = new SchoolService(port);
const homeDiv = document.getElementById("home");


philosopherServiceCall.getPhilosophers();
schoolServiceCall.getSchools();

homeDiv.addEventListener('click', function(e){
    console.log(e.target.id);
})
