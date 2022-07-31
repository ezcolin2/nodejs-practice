const users = {
    id : ["hello","json"],
    pwd : [123,1234]
};

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
        const idx = users.id.indexOf(id);
        const pwd = req.body.pwd;
        if(users.id.includes(id)){
            if(pwd == users.pwd[idx]){
                return res.json({
                    success : true,
                    msg : "login success!"
                });
            }
            
        }
        return res.json({
            success : false,
            msg : "login failed!"
        });
    }
}
module.exports = {
    output,
    process
};