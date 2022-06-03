import {User} from './models/User';
console.log("Running")
const user = new User({name: "John", age: 30});
console.log(user.get("name"));
user.set({name: "John Doe", age: 40});
user.on("change", () => {
    console.log("User changed");
});
user.on("error", () => {
    console.log("error");
}

user.trigger("change");
user.trigger("error");
console.log(user);;