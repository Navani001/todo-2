function add()
{
    var add=document.getElementById("need");
    
    add.innerHTML+="<li><span class='s'>"+document.getElementById("content").value+"</span><button onclick=del(event) type='button'>delete</button></li>";
    
}
function del(event)
{
event.target.parentElement.remove();
}
