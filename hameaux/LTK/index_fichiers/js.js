var timer4=setInterval(lastDate,30000);var timer6=setInterval(newNotifs,60000);function lastDate()
{$.post("funAjax.php",{action:"lastDate"},"json");return false;}
function newNotifs()
{$.post("funAjax.php",{action:"newNotifs"},function(donnee)
{if(donnee.updated!=="yes")
return;if(donnee.hasOwnProperty("notif_modo")&&donnee.notif_modo>0)
{$("a#notifs_header").empty().append(donnee.notif_modo);$("a#notifs_header").parent("#parent_notifs_header").css("background-color","#CF1919");$("a#notifs_header").parent("#parent_notifs_header").css("cursor","pointer");$("a#notifs_header").parent("#parent_notifs_header").css("border","1px solid white");}
else
{$("a#notifs_header").empty().append(" ");$("a#notifs_header").parent("#parent_notifs_header").removeAttr("style");}},"json");return false;}
function newImage(arg){if(document.images){rslt=new Image();rslt.src=arg;return rslt;}}
function changeImages(){if(document.images&&(preloadFlag==true)){for(var i=0;i<changeImages.arguments.length;i+=2){document[changeImages.arguments[i]].src=changeImages.arguments[i+1];}}}
var preloadFlag=false;function preloadImages(){if(document.images){link1_over=newImage("stuff/inscription_over.png");preloadFlag=true;}}