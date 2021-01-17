let body = document.querySelector('body'),
    create = document.querySelector("#create");

body.addEventListener('contextmenu', event=>{
    create.style.display = "block";
    create.style.left = (event.pageX)+"px";
    create.style.top = (event.pageY)+"px";
})

create.addEventListener('mouseout', event=>{
    create.style.display = "none";
})

create.addEventListener('click', event=>{
    let content = prompt('File name:')
    if (content != null){
        let element = document.querySelector(".list"),
            object = document.createElement('div'),
            textnode = document.createTextNode(content);
        object.setAttribute('oncontextmenu', 'return false')
        object.setAttribute('class', 'list_object');
        object.appendChild(textnode);
        element.appendChild(object);
    }
    create.style.display = "none"
})