window.addEventListener("load",()=>{
    
    document.querySelector("#like").addEventListener("click", like);
    document.querySelector("#dislike").addEventListener("click", dislike);
    });
    var count=0;
    var result;
function like(){
        count++;
       document.querySelector("#h2").innerHTML=`Result=${count}`;
}
function dislike(){
    count--;
    document.querySelector("#h2").innerHTML=`Result=${count}`;
}