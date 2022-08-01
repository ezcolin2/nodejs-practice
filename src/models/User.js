"use strict";
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
    
    register(){
        const response = {};
        const temp = this.body;
        const users = UserStorage.getUsers("id","pwd");
        if(users.id.includes(temp.id)){
            response.success = false;
            response.msg = "아이디가 이미존재합니다";
            return response;
        }
        else if(temp.pwd !==temp.pwdConfirm){

            response.success = false;
            response.msg = "같은 비밀번호를 입력하시오";
            return response;
        }
        response.success = true;
        response.msg = "회원가입 성공!";
        return response;

    }
};
module.exports = User;