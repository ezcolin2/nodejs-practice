const UserStorage = require("./UserStorage.js");
class User{
    constructor(body){
        this.body = body;
    }
    login(){
        const response = {};
        const temp = UserStorage.userInfo(this.body.id);
        if(temp.id==this.body.id&&temp.pwd ==this.body.pwd){
            response.success = true;
            response.msg = `login success!! ${temp.id}`;
            return response;
        }
        response.success = false;
        response.msg = "login failed!!!";
        return response;
    }
};
module.exports = User;