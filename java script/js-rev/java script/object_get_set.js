const user = {
    _email: 'nitin@gmail.com',
    _pass: "asd12",

    get email(){
        return this._email.toUpperCase()
    },
    set email(val){
        this._email = email
    }
}

const nitin = Object.create(user)
console.log(nitin.email)