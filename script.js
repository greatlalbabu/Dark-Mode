let circlebtn = document.querySelector(".circle");
let background = document.getElementById("container");
let value = true;
circlebtn.addEventListener("click", ()=>{
    if(circlebtn.style.left=="6px"){
        background.style.backgroundColor= "black";
        background.style.Color = "white";
        circlebtn.style.top = "2px";
        circlebtn.style.right = "6px";
       
        // value =false;
    }
    else{
        background.style.backgroundColor= "white";
        // circlebtn.classList.add(democircle)
        circlebtn.style.left = "6px";
        background.style.Color = "black";
        // value=true;
    }
})