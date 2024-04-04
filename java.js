function add()
{
    var add=document.getElementById("need");
    
    add.innerHTML+="<li>"+document.getElementById("content").value+"<button onclick=del(event) type='button'>delete</button></li>";
    
}
function del(event)
{
event.target.parentElement.remove();
}
