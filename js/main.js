// document.getElementById("red").onclick=function(){
//     document.getElementById("demo").style.color="red";
// }
// document.getElementById("green").onclick=function(){
//     document.getElementById("demo").style.color="green";
// }
// document.getElementById("orange").onclick=function(){
//     document.getElementById("demo").style.color="orange";
// }
document.querySelectorAll("button").forEach( function(e){
   e.onclick=function(){
document.querySelector("#demo").style.color=e.dataset.color
   }
})

 
    
