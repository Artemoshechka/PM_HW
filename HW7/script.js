const container = document.getElementById("container"),
    create = document.getElementById("create"),
    update = document.getElementById("update"),
    rename = document.getElementById("rename"),
    delete_element = document.getElementById("delete");

let current = null;

const updateHandler = (e) => {
    e.stopPropagation();
    current = e.target;
    update.setAttribute("style", `top:${e.y}px; left:${e.x}px;`);
};

const createFile = () => {
    create.style.top = "-200px";
    const name = prompt("Input file name");
    if (name === "" || name === null) {
        return;
    }
    const file = document.createElement("div");
    file.setAttribute('class','file');
    file.innerHTML = name;
    file.addEventListener("contextmenu", (evt) => {
        evt.preventDefault();
        updateHandler(evt);
    });
    container.appendChild(file);
};

const deleteFile = () => {
    current.remove();
    update.style.top = "-200px";
    current = null;
};

const renameFile = () => {
    let files = document.getElementsByTagName("span");
    const newName = prompt("Input new file name");
    if (newName === "" || newName === undefined) {
        return;
    }

    for (let file of files) {
        if (file.innerHTML === newName) {
            alert("File with this name already exist, input another name");
            return;
        }
    }
    current.innerHTML = newName;
    update.style.top = "-200px";
};

create.addEventListener("click", createFile);
rename.addEventListener("click", renameFile);
delete_element.addEventListener("click", deleteFile);
create.addEventListener(
    "mouseleave",
    () => (create.style.top = "-200px")
);

update.addEventListener(
    "mouseleave",
    () => (update.style.top = "-200px")
);

container.addEventListener("contextmenu", (event) => {
    event.stopPropagation();
    create.setAttribute(
        "style",
        `top:${event.y}px; left:${event.x}px;`
    );
});

window.addEventListener("DOMContentLoaded", function () {
    let files = document.querySelectorAll(".file");
    for (let file of files) {
        file.addEventListener("contextmenu", (evt) => {
            evt.preventDefault();
            updateHandler(evt);
        });
    }
});