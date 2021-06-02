// to set the data automatically
const date=document.getElementById("date");
date.innerHTML=new Date().getFullYear();

// close links
 const navToggle=document.querySelector('.nav_toggle');
 const linksContainer = document.querySelector('.links_container');
 const links =document.querySelector('.links');

 navToggle.addEventListener("click",function(){
    if(links.classList.contains("links")){
        links.classList.remove("links");
    }
       else{
            links.classList.add("links");
 
            
    }
 });
