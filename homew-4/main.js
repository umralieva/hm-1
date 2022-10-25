// const { request } = require("express");

const btn = document.querySelector(".btn")

btn.addEventListener("click", ()=>{
    const request= new XMLHttpRequest();
    request.open("GET", "data.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();
    request.addEventListener("load", ()=>{
        // console.log(request.response);
        console.log(JSON.parse(request.response));
        const data= (JSON.parse(request.response))
        document.querySelector(".phone").innerHTML = data.phone;
        document.querySelector(".address").innerHTML = data.address;
    })
});
