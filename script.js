let btn = document.querySelector(".circle");
let background = document.getElementById("container");

let val=true;


btn.addEventListener("click", ()=>{
    if(val==true){
        btn.style.right="3px";
        background.style.backgroundColor="black";
        background.style.color="white";
        val=false
    }
    else{
        btn.style.right="71px";
        background.style.backgroundColor="white";
        background.style.color="black";
        val=true;
    }

})