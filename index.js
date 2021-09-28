const port = "http://localhost:3000";
const philosopherServiceCall = new PhilosopherService(port);
const schoolServiceCall = new SchoolService(port);

philosopherServiceCall.getPhilosophers();
schoolServiceCall.getSchools();

