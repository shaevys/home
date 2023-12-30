function GetId(id)
{return document.getElementById(id);}
var i=false;function move(e){if(i){if(navigator.appName!="Microsoft Internet Explorer"){GetId("curseur").style.left=e.pageX+5+"px";GetId("curseur").style.top=e.pageY+10+"px";}
else{if(document.documentElement.clientWidth>0){GetId("curseur").style.left=20+event.x+document.documentElement.scrollLeft+"px";GetId("curseur").style.top=10+event.y+document.documentElement.scrollTop+"px";}
else{GetId("curseur").style.left=20+event.x+document.body.scrollLeft+"px";GetId("curseur").style.top=10+event.y+document.body.scrollTop+"px";}}}}
function montre(text,progressBar){if(i==false){GetId("curseur").style.visibility="visible";GetId("curseur").innerHTML=text;if(progressBar!==false&&progressBar!=undefined){$("#curseur").append("<div class='achievementBar'><div class='achievementProgress' style='width: "+progressBar+"px'></div></div>");}
i=true;}}
function cache(){if(i==true){GetId("curseur").style.visibility="hidden";i=false;}}
document.onmousemove=move;