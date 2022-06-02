import {User} from './models/User';
console.log("Running")
const user = new User({name: "John", age: 30});
console.log(user.get("name"));
user.set({name: "John Doe", age: 40});
console.log(user.get("name"));