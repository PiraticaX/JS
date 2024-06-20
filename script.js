var x=true;
function myFunction(){
const myc=document.getElementsByTagName("p");
var len=myc.length;
for(var i=0;x && i<len;i++){
    setInterval(function() { 
        myc[i].innerHTML="red";
},1000)
myc[i].style.color="black";
if(i>=len){
    i=0;
}
}
}
function reset(){
    x=false;
}



