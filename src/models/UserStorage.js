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
};

module.exports = UserStorage;