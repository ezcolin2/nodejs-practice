"use strict";
class UserStorage{

    static getUsers(...fields){
        const fs = require("fs").promises;
        return fs.readFile("./src/databases/user.json")
        .then(data=>{
            const user = JSON.parse(data);
            const userInform = fields.reduce((newUser,key)=>{
                newUser[key] = user[key];
                return newUser;
            }
            ,{});
            return userInform;
        });
    }

    static userInfo(id){
        const fs = require("fs").promises;
        return fs.readFile("./src/databases/user.json")
        .then(data=>{
            const users = JSON.parse(data);
            const idx = users.id.indexOf(id);
            const keys = Object.keys(users);
            const userInform = keys.reduce((newUsers,key)=>{
                newUsers[key] = users[key][idx];
                return newUsers;
            },{});
            return userInform;
        });
        // const temp = this.#users;
        // const idx = temp.id.indexOf(id);
        // const keys = Object.keys(temp);
        // const newUser = keys.reduce((newUser,key)=>{
        //     newUser[key] = temp[key][idx];
        //     return newUser;
        // },{});
        // return newUser;
    
    }
    static async userSave(user){
        const fs = require("fs").promises;
        const users = await this.getUsers("id","pwd","name");
        users.id.push(user.id);
        users.pwd.push(user.pwd);
        users.name.push(user.name);
        fs.writeFile("./src/databases/user.json",JSON.stringify(users));
    }
};

module.exports = UserStorage;