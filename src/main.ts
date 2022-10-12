import {User} from './models/User';

const user = new User({id:1, name:'John'});
user.set({name:'Luca', age:32, id:1});
user.save();
user.set({name:'Luca', age:33, id:1});
user.fetch();
user.save();
setTimeout(() => {
    console.log(user);
}, 2000);


