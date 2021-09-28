class Philosopher {
    static all = [];

    constructor({name, id, bio, lifespan, quotes, works, school, pantheon}){
        this.name = name 
        this.id = id 
        this.bio = bio 
        this.lifespan = lifespan
        this.quotes = quotes 
        this.works = works 
        this.school_id = school["id"]
        this.pantheon = pantheon 
        Philosopher.all.push(this)
    }
}