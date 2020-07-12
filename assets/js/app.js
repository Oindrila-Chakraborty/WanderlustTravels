navSlide();
function navSlide(){
    const burger=document.querySelector(".burger");
    const nav=document.querySelector(".links");
    const icon=document.querySelector(".burger .fas")
    burger.addEventListener("click",function(){
        nav.classList.toggle("nav-active");
        if(icon.classList.contains("fa-bars"))
        {
            icon.classList.remove("fa-bars")
            icon.classList.add("fa-times")
        }
        else if(icon.classList.contains("fa-times"))
        {
            
            icon.classList.remove("fa-times")
            icon.classList.add("fa-bars")
        }
    })
}
var totalTour=document.querySelector("#num-panel .total-tour");
var yearlyTour=document.querySelector("#num-panel .yearly-tour");
var client=document.querySelector("#num-panel .client");
var a=totalTour.textContent;
var b=yearlyTour.textContent;
var c=client.textContent;
var numbers=setInterval(change,100);
var panel=document.querySelector("#num-panel");
panel.addEventListener("mouseover",function(){
    clearInterval(numbers);
    totalTour.innerHTML=a;
    yearlyTour.innerHTML=b;
    client.innerHTML=c;
})

function change(){
    
    var x=Math.floor(Math.random()*400)+100;
    var y=Math.floor(Math.random()*40)+10;
    var z=Math.floor(Math.random()*2300)+1000;
    totalTour.innerHTML=x;
    yearlyTour.innerHTML=y;
    client.innerHTML=z;
}