"use strict";
class UserStorage{

    static #users = {
        id : ["hello","json"],
        pwd : [123,1234],
        name : ["chulsoo","minsoo"]
    };
    static getUsers(...fields){
        const temp = this.#users;
        const newUsers = fields.reduce((newUsers,field)=>{
            newUsers[field]=temp[field];
            return newUsers;
        },{});
        console.log(newUsers);
        return newUsers;
    }
    static userInfo(id){
        const temp = this.#users;
        const idx = temp.id.indexOf(id);
        const keys = Object.keys(temp);
        const newUser = keys.reduce((newUser,key)=>{
            newUser[key] = temp[key][idx];
            return newUser;
        },{});
        return newUser;
    
    }
    static userSave(user){
        const users = this.#users;
        users.id.push(user.body.id);
        users.pwd.push(user.body.pwd);
        users.name.push(user.body.name);
    }
};

module.exports = UserStorage;