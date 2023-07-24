const logo = document.querySelector("img");

const onClick = () => console.log("click event");
const onDoubleClick = () => {
    if (document.body.style.backgroundColor !== "purple") {
        document.body.style.backgroundColor = "purple"
        document.body.style.color = "white"
    } else {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
    }
}

const onRightClick = () => console.log("right click event");
const onMouseDown = () => console.log("mouse down event");
const onMouseUp = () => console.log("mouse up event");
const onMouseWheel = () => console.log("mouse wheel event");
const onMouseOver = () => console.log("mouse over event");
const onMouseOut = () => console.log("mouse out event");
const onDragStart = () => console.log("drag start event");
const onDrag = () => console.log("drag event");
const onDragEnd = () => console.log("drag end event");






//Event listeners
logo.addEventListener("click" ,onClick);
logo.addEventListener("dblclick" ,onDoubleClick);
logo.addEventListener("contextmenu" ,onRightClick);//sağ tarafa tıklama
logo.addEventListener("mousedown" ,onMouseDown);
logo.addEventListener("mouseup" ,onMouseUp);
logo.addEventListener("wheel" ,onMouseWheel);//fare tekerleği
logo.addEventListener("mouseover" ,onMouseOver);//fare üzerine gelince
logo.addEventListener("mouseout" ,onMouseOut);//fare üzerine gelince
logo.addEventListener("dragstart" ,onDragStart);//sürükle
logo.addEventListener("drag" ,onDrag);//sürükle
logo.addEventListener("dragend" ,onDragEnd);//sürükle


