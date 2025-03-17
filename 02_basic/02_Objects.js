//singletone
const mysymbol= Symbol("mykey1")
const jsUser ={
    name:"sunsun patel",
    age:12,
    "address_p":"Ahmedabad",
    mysymbol : "mukkkkkkk",
    [mysymbol] : "mukkkkkkk",

}
console.log(jsUser.name)
console.log(jsUser["address_p"])
console.log(typeof jsUser.mysymbol)
console.log(typeof jsUser[mysymbol])