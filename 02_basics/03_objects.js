//  singleton
// object literals

// Object.create

const mySym = Symbol("key1")


const JsUser = {
    name: "Saurav",
    "full name": "Saurav Bhadauriya",
    [mySym]: "mykey1",
    age: 24,
    location: "Delhi",
    email: "sauravbhadauriya17@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "saurav@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "saurav@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
