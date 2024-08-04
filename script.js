let button = document.getElementById("btn");
let container = document.getElementById("container");
let no = document.getElementById("no");

button.addEventListener("click", function(){
    no.style.display = "none";

    let main = document.getElementById("main");
    main.style.justifyContent = "start";
    main.style.alignItems = "start";
    main.style.height="5vh";
    main.style.position = "sticky";
    main.style.top = "0";
    main.style.zIndex = "1";
    

let head = document.getElementById("head");
head.style.display = "none";


    let notes = document.createElement("div");
    notes.classList.add("notes");
    container.appendChild(notes);

    let textarea = document.createElement("textarea");
    textarea.classList.add("textarea");
    notes.appendChild(textarea);
     
    textarea.style.height = "300px";
    textarea.style.width = "500px";

    let del = document.createElement("button");
    del.classList.add("del");
    del.innerText = "Delete";
    notes.appendChild(del);

    del.style.width = "80px";
    del.style.height = "50px";
    del.style.backgroundColor = "black";
    del.style.color = "aquamarine";
    del.style.border = "aquamarine 2px solid";
    del.style.borderRadius = "10px";
    del.style.fontSize = "15px";

    del.style.fontWeight = "bold";
    del.style.cursor = "pointer";

    notes.style.display = "flex";
    notes.style.flexDirection = "column";
    notes.style.justifyContent = "center";
    notes.style.alignItems="end";
    notes.style.gap="10px";

    del.addEventListener("click", function(){
        notes.remove();
    })

})