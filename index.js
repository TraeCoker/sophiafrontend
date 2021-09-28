const port = "http://localhost:3000";
const quoteServiceCall = new QuoteService(port);

quoteServiceCall.getQuotes();