//Copyright (c) 2022 by Aigars Silkalns (https://codepen.io/colorlib/pen/rxddKy)
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
};

module.exports = UserStorage;