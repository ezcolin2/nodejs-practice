"use strict";
const id = document.querySelector("#id");

const pwd = document.querySelector("#pwd");
const btn = document.querySelector("button");
const login = ()=>{
    const req = {
        id : id.value,
        pwd : pwd.value
    };
    fetch("/login",{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(req)

    })
    .then(res=>res.json())
    .then(
        res=>{
            if(res.success){
                location.href = "/";
                document.write(res.msg);
            }
            else{
                alert(res.msg);
            }
        }
    )
    .catch(err=>
        console.error(new Error("login error!")))
};
btn.addEventListener("click",login);