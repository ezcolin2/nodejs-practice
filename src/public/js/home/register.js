"use strict";
const id = document.querySelector("#id");
const names = document.querySelector("#name");
const pwd = document.querySelector("#pwd");
const pwdConfirm= document.querySelector("#pwd-confirm");
const btn = document.querySelector("#button");
const register= (event)=>{
    event.preventDefault();
    const req = {
        id : id.value,
        name : names.value,
        pwd : pwd.value,
        pwdConfirm : pwdConfirm.value
    };
    fetch("/register",{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(req)
    })   
    .then(res=>res.json())
    .then(res=>{
        if(res.success){
            alert("회원가입 성공!");
            location.href = "/login";
        }
        else{
            alert(res.msg);
        }
    });
};
btn.addEventListener("click",register);