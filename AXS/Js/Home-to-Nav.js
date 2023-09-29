
let canvas = document.querySelector("#canvas");


let particles = document.querySelector("#particles-js");
let homebutton = document.querySelector(".home");
let abt= document.querySelector(".abt");
let client = document.querySelector(".client");
let service = document.querySelector(".service");
let contact = document.querySelector(".contact");
let team = document.querySelector(".team");
let content= document.querySelector(".content");
let about=document.querySelector(".about-section")
let firefly=document.querySelectorAll(".firefly")



function galaxyVisible() {

  canvas.style.setProperty("display", "block");
  canvas.style.setProperty("opacity", "1");
  particles.style.setProperty("opacity", "0");
  content.classList.add("transform-down")
  content.style.setProperty("opacity", "0");
  firefly.forEach(element => {
    
    element.style.setProperty("display", "block");
  });
 

    homebutton.classList.add("transform-origin-buttons")
    homebutton.classList.remove("transform-up-buttons")
   
    abt.classList.add("transform-origin-buttons")
  abt.classList.remove("transform-up-buttons")
   
    client.classList.add("transform-origin-buttons")
    client.classList.remove("transform-up-buttons")
   
    service.classList.add("transform-origin-buttons")
    service.classList.remove("transform-up-buttons")
   
    contact.classList.add("transform-origin-buttons")
  contact.classList.remove("transform-up-buttons")
   
   team.classList.add("transform-origin-buttons")
    team.classList.remove("transform-up-buttons") 
}

function galaxyhide() {

  canvas.style.setProperty("opacity", "0");
  particles.style.setProperty("opacity", "1");
  content.classList.remove("transform-down")
  content.style.setProperty("opacity", "1");
  firefly.forEach(element => {
    
    element.style.setProperty("display", "none");
  });
 

    homebutton.classList.remove("transform-origin-buttons")
    homebutton.classList.add("transform-up-buttons")
   
    abt.classList.remove("transform-origin-buttons")
  abt.classList.add("transform-up-buttons")
   
    client.classList.remove("transform-origin-buttons")
    client.classList.add("transform-up-buttons")
   
    service.classList.remove("transform-origin-buttons")
    service.classList.add("transform-up-buttons")
   
    contact.classList.remove("transform-origin-buttons")
  contact.classList.add("transform-up-buttons")
   
   team.classList.remove("transform-origin-buttons")
    team.classList.add("transform-up-buttons")
   
  
   
 
}

function aboutcome(){
  homebutton.classList.remove("transform-origin-buttons")
  homebutton.classList.add("transform-up-buttons")
 
  abt.classList.remove("transform-origin-buttons")
abt.classList.add("transform-up-buttons")
 
  client.classList.remove("transform-origin-buttons")
  client.classList.add("transform-up-buttons")
 
  service.classList.remove("transform-origin-buttons")
  service.classList.add("transform-up-buttons")
 
  contact.classList.remove("transform-origin-buttons")
contact.classList.add("transform-up-buttons")
 
 team.classList.remove("transform-origin-buttons")
  team.classList.add("transform-up-buttons")
 
  canvas.style.setProperty("opacity", "0");
  about.style.setProperty("transform", "translateX(0)");

}