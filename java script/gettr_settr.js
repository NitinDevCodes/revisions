class user {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(val2){
        this._email = val2
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(val){
        this._password = val
    }
}

const nitin = new user("nitin@gmail.com", "af34")
console.log(nitin.password)
console.log(nitin.email)
