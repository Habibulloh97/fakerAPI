const express = require('express')
const app = express()
const port = 8000 
const faker = require('faker')


class User{
    constructor(){
        this._id = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
const user = new User();

class Address{
constructor(){
    this.street = faker.address.streetAddress();
    this.city = faker.address.city();
    this.state = faker.address.state();
    this.zipCode = faker.address.zipCode();
    this.country = faker.address.country();
}
}

const newAddress= new Address();

class Company{
    constructor(){
        this._id = faker.random.number();
        this.name= faker.company.companyName();
        this.address = newAddress;
    }
}

const newComp = new Company();


app.get("/user", (req,res)=>{
    res.json(new User)
})


app.get("/company", (req,res)=>{
    res.json(new Company)
})







app.listen(port,() => console.log(`Running on port ${port}!`))