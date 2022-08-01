const UserStorage = require("../../models/UserStorage");
const output = {

    hello : (req,res)=>{
        res.render("home/index");
    },

    login : (req,res)=>{
        res.render("home/login");
    }
}
const process = {
    login : (req,res)=>{
        const id = req.body.id;
        const pwd = req.body.pwd;
        const users = UserStorage.getUsers("id","pwd","name");
        const idx = users.id.indexOf(id);
        const response = {};
        if(users.id.includes(id)){
            if(pwd == users.pwd[idx]){
                response.success = true;
                response.msg = `hello! ${id}`;
                return res.json(response);
            }
        }
        
        response.success = false;
        response.msg = `k you`;
        return res.json(response);
    }
};
module.exports = {
    output,
    process
};