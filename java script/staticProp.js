class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is: ${this.username}`)
    }

    static createId(){
        return `2341`
    }
}

const nitin = new user("Nitin")
// console.log(nitin.createId())

class user2 extends user {
    constructor(email, username){
        super(username)
        this.email = email
    }
}

const nikhil = new user2("Nikhil", "nikhil@.com")
nikhil.logMe()
// console.log(nikhil.createId())
