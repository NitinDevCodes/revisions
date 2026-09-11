class user {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is: ${this.username}`)
    }
}

class teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    adddCourses(){
        console.log(`New course was added by ${this.username}`)
    }
}

const nitin = new teacher("Nitin", "nitin@gmail.com", "2435")

nitin.adddCourses()
const nitinNikhil = new user("Nitinnikhil")

nitinNikhil.logMe()

console.log(user instanceof teacher)