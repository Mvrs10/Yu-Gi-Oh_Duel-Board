addBackgroundImageToSlots = () =>
{
    let slots = document.querySelectorAll(".slot");
    for(let i=0;i<slots.length;i++)
    {
        slots[i].style.backgroundImage="url('magicalhats.jpg')";
        slots[i].style.backgroundSize="120px 200px";
    }
};
addImageToRandomSlot = () =>
{
    let img=document.createElement("img");
    img.src="darkmagician.JPG";
    img.id="dimage";
    img.style.width="120px";
    img.style.height="200px";
    img.style.cursor="pointer";
    img.draggable=true;
    let slots=document.getElementsByClassName("slot"); // for the purpose of learning
    let random=Math.floor(Math.random()*7);
    slots[random].appendChild(img);
};
loadContent = () =>
{
    addBackgroundImageToSlots();
    addImageToRandomSlot();
};
function drag_start()
{    
    document.getElementsById("dimage").style.cursor="grabbing";
}
function drag_end()
{    
    addBackgroundImageToSlots();
}
function drag_over(event)
{
    event.preventDefault();       
}
function drag_enter(event)
{
    event.preventDefault();
    this.className += " hovered";
}
function drag_leave()
{
    this.classList.remove("hovered");
}
function drag_drop(event)
{
    event.preventDefault();
    event.target.appendChild(document.getElementById("dimage"));
}
window.onload=loadContent();
let draggedImg=document.getElementById("dimage");
let slots = document.querySelectorAll(".slot");
draggedImg.addEventListener("dragstart", drag_start);
for (let slot of slots)
{
    slot.addEventListener("dragover",drag_over);
    slot.addEventListener("dragenter",drag_enter);
    slot.addEventListener("dragleave",drag_leave);
    slot.addEventListener("drop",drag_drop); 
}
draggedImg.addEventListener("dragend",drag_end);