let color=document.getElementById("color");
let button=document.getElementById("btn");
let text=document.querySelector("textarea");
let container =document.getElementById("container");
let lock=document.getElementById("write");



function addNotes(){
    if(text.value==""){
        alert("Enter text!!!!");
        div.display="none"
    }

   let div=document.createElement("div");
   let para=document.createElement("p");
   let cross=document.createElement("button");

   lock.innerHTML="";

   div.appendChild(para);
   div.appendChild(cross);
   container.appendChild(div);

   cross.innerText="X";
   para.innerText=text.value;

   div.style.background=color.value;
   div.style.display="flex";
   div.style.alignItems="start";
   div.style.justifyContent="space-between";
   div.style.height="10vh";
   div.style.width="30vw";

   cross.style.border="1px solid black";
   cross.style.background="white";
   div.style.padding="8px";

   cross.style.height="2.5vh";
   cross.style.width="2vh";

   div.style.margin="5px";


text.value="";

cross.addEventListener("click",function(){
    alert(div.style.display="none");
})
}


 button.addEventListener("click",addNotes);