const port = "http://localhost:3000";
const quoteServiceCall = new QuoteService(port);
const philosopherServiceCall = new PhilosopherService(port);

philosopherServiceCall.getPhilosophers();

