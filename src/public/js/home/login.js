console.log("js good!");
console.log("nye");
const id = document.querySelector("#id");

const pwd = document.querySelector("#pwd");
const btn = document.querySelector("button");
const login = ()=>{
    const req = {
        id : id.value,
        pwd : pwd.value
    };
};
btn.addEventListener("click",login);