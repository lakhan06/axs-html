let canvas = document.querySelector("#canvas");
let threecontainer = document.querySelector("#three-container");

let video=document.querySelector("#vid")
let particles = document.querySelector("#particles-js");
let HeroSection = document.querySelector(".Hero-section");
let homebutton = document.querySelector(".home");
let buttonbar = document.querySelector(".button-bar");
let abt = document.querySelector(".abt");
let client = document.querySelector(".client");
let service = document.querySelector(".service");
let contact = document.querySelector(".contact");
let team = document.querySelector(".team");
let content = document.querySelector(".content-home");
let about = document.querySelector(".about-section");
let firefly = document.querySelectorAll(".firefly");

let viewclient = document.querySelector(".view-client");
let viewteam = document.querySelector(".view-team");
let viewcontact = document.querySelector(".view-contact");
let viewabout = document.querySelector(".view-about");
let viewvision = document.querySelector(".view-vision");
let viewservice= document.querySelector(".view-service");

let clientMain = document.querySelector(".client-main");
let teamSection = document.querySelector(".team-section");
let ContactSection = document.querySelector(".Contact");
let aboutusSection = document.querySelector(".about-us");
let visionSection = document.querySelector(".canvas-wrapper");
let ServiceSection = document.querySelector(".service-section");

let aboutlink = document.querySelector(".about-link");




function galaxyVisible() {

  // video.style.setProperty("display", "none");
  canvas.style.setProperty("display", "block");
  canvas.style.setProperty("transform", "scale(1)");
  canvas.style.setProperty("opacity", "1");
  particles.style.setProperty("transform", "translateY(100%)");
  particles.style.setProperty("opacity", "0");
  content.classList.add("transform-down");
  content.style.setProperty("opacity", "0");
  firefly.forEach((element) => {
    element.style.setProperty("display", "block");
  });

  homebutton.classList.add("transform-origin-buttons");
  homebutton.classList.remove("transform-up-buttons");

  abt.classList.add("transform-origin-buttons");
  abt.classList.remove("transform-up-buttons");

  client.classList.add("transform-origin-buttons");
  client.classList.remove("transform-up-buttons");

  service.classList.add("transform-origin-buttons");
  service.classList.remove("transform-up-buttons");

  contact.classList.add("transform-origin-buttons");
  contact.classList.remove("transform-up-buttons");

  team.classList.add("transform-origin-buttons");
  team.classList.remove("transform-up-buttons");
}

function galaxyhide() {
  
  // video.style.setProperty("display", "block");
  canvas.style.setProperty("opacity", "0");
  canvas.style.setProperty("transform", "scale(0)");  

  particles.style.setProperty("opacity", "1");
  particles.style.setProperty("transform", "translateY(0)");
  content.classList.remove("transform-down");
  content.style.setProperty("opacity", "1");
  firefly.forEach((element) => {
    element.style.setProperty("display", "none");
  });

  homebutton.classList.remove("transform-origin-buttons");
  homebutton.classList.add("transform-up-buttons");

  abt.classList.remove("transform-origin-buttons");
  abt.classList.add("transform-up-buttons");

  client.classList.remove("transform-origin-buttons");
  client.classList.add("transform-up-buttons");

  service.classList.remove("transform-origin-buttons");
  service.classList.add("transform-up-buttons");

  contact.classList.remove("transform-origin-buttons");
  contact.classList.add("transform-up-buttons");

  team.classList.remove("transform-origin-buttons");
  team.classList.add("transform-up-buttons");
}

//-------------- galxy to client part--------------------
function clientCome() {
  // particles.style.setProperty("opacity", "1");
  // particles.style.setProperty("transform", "translateY(0)");
  canvas.style.setProperty("opacity", "0");
  viewclient.style.setProperty("opacity", "1");
  clientMain.style.setProperty("transform", "scale(1)");
  clientMain.style.setProperty("opacity", "1");
  buttonbar.style.setProperty("opacity", "1");
  buttonbar.style.setProperty("transform", "translateY(0)");
  // firefly.forEach((element) => {
  //   element.style.setProperty("display", "none");
  // });

  homebutton.classList.remove("transform-origin-buttons");
  homebutton.classList.add("transform-up-buttons");

  abt.classList.remove("transform-origin-buttons");
  abt.classList.add("transform-up-buttons");

  client.classList.remove("transform-origin-buttons");
  client.classList.add("transform-up-buttons");

  service.classList.remove("transform-origin-buttons");
  service.classList.add("transform-up-buttons");

  contact.classList.remove("transform-origin-buttons");
  contact.classList.add("transform-up-buttons");

  team.classList.remove("transform-origin-buttons");
  team.classList.add("transform-up-buttons");
}
function clientGo() {
  // particles.style.setProperty("opacity", "0");
  // particles.style.setProperty("transform", "translateY(100%)");
  canvas.style.setProperty("opacity", "1");
  // clientMain.style.setProperty("transform", "translateX(100%)");
  clientMain.style.setProperty("transform", "scale(0)");
  clientMain.style.setProperty("opacity", "0");
  viewclient.style.setProperty("opacity", "0");
  buttonbar.style.setProperty("opacity", "0");
  buttonbar.style.setProperty("transform", "translateY(100%)");

  // firefly.forEach((element) => {
  //   element.style.setProperty("display", "block");
  // });

  homebutton.classList.add("transform-origin-buttons");
  homebutton.classList.remove("transform-up-buttons");

  abt.classList.add("transform-origin-buttons");
  abt.classList.remove("transform-up-buttons");

  client.classList.add("transform-origin-buttons");
  client.classList.remove("transform-up-buttons");

  service.classList.add("transform-origin-buttons");
  service.classList.remove("transform-up-buttons");

  contact.classList.add("transform-origin-buttons");
  contact.classList.remove("transform-up-buttons");

  team.classList.add("transform-origin-buttons");
  team.classList.remove("transform-up-buttons");
}

// ----------galaxy to team part--------------------
function teamCome() {
  // particles.style.setProperty("opacity", "1");
  // particles.style.setProperty("transform", "translateY(0)");
  canvas.style.setProperty("opacity", "0");
  viewteam.style.setProperty("opacity", "1");
  // teamSection.style.setProperty("transform", "translateX(0)");
  teamSection.style.setProperty("transform", "scale(1)");
  teamSection.style.setProperty("opacity", "1");
  buttonbar.style.setProperty("opacity", "1");
  buttonbar.style.setProperty("transform", "translateY(0)");

  // firefly.forEach((element) => {
  //   element.style.setProperty("display", "none");
  // });

  homebutton.classList.remove("transform-origin-buttons");
  homebutton.classList.add("transform-up-buttons");

  abt.classList.remove("transform-origin-buttons");
  abt.classList.add("transform-up-buttons");

  client.classList.remove("transform-origin-buttons");
  client.classList.add("transform-up-buttons");

  service.classList.remove("transform-origin-buttons");
  service.classList.add("transform-up-buttons");

  contact.classList.remove("transform-origin-buttons");
  contact.classList.add("transform-up-buttons");

  team.classList.remove("transform-origin-buttons");
  team.classList.add("transform-up-buttons");
}

function teamGo() {
  // particles.style.setProperty("opacity", "0");
  // particles.style.setProperty("transform", "translateY(100%)");
  canvas.style.setProperty("opacity", "1");
  // teamSection.style.setProperty("transform", "translateX(100%)");
  teamSection.style.setProperty("transform", "scale(0)");
  teamSection.style.setProperty("opacity", "0");
  viewteam.style.setProperty("opacity", "0");
  buttonbar.style.setProperty("opacity", "0");
  buttonbar.style.setProperty("transform", "translateY(100%)");
  // firefly.forEach((element) => {
  //   element.style.setProperty("display", "none");
  // });

  homebutton.classList.add("transform-origin-buttons");
  homebutton.classList.remove("transform-up-buttons");

  abt.classList.add("transform-origin-buttons");
  abt.classList.remove("transform-up-buttons");

  client.classList.add("transform-origin-buttons");
  client.classList.remove("transform-up-buttons");

  service.classList.add("transform-origin-buttons");
  service.classList.remove("transform-up-buttons");

  contact.classList.add("transform-origin-buttons");
  contact.classList.remove("transform-up-buttons");

  team.classList.add("transform-origin-buttons");
  team.classList.remove("transform-up-buttons");
}
// ----------galaxy to Contact part--------------------
function contactCome() {
  // particles.style.setProperty("opacity", "1");
  // particles.style.setProperty("transform", "translateY(0)");
  canvas.style.setProperty("opacity", "0");
  viewcontact.style.setProperty("opacity", "1");
  // ContactSection.style.setProperty("transform", "translateX(0)");
  ContactSection.style.setProperty("transform", "scale(1)");
  ContactSection.style.setProperty("opacity", "1");

  buttonbar.style.setProperty("opacity", "1");
  buttonbar.style.setProperty("transform", "translateY(0)");

  // firefly.forEach((element) => {
  //   element.style.setProperty("display", "none");
  // });

  homebutton.classList.remove("transform-origin-buttons");
  homebutton.classList.add("transform-up-buttons");

  abt.classList.remove("transform-origin-buttons");
  abt.classList.add("transform-up-buttons");

  client.classList.remove("transform-origin-buttons");
  client.classList.add("transform-up-buttons");

  service.classList.remove("transform-origin-buttons");
  service.classList.add("transform-up-buttons");

  contact.classList.remove("transform-origin-buttons");
  contact.classList.add("transform-up-buttons");

  team.classList.remove("transform-origin-buttons");
  team.classList.add("transform-up-buttons");
}

function contactGo() {
  // particles.style.setProperty("opacity", "0");
  // particles.style.setProperty("transform", "translateY(100%)");
  canvas.style.setProperty("opacity", "1");
  // ContactSection.style.setProperty("transform", "translateX(100%)");
  ContactSection.style.setProperty("transform", "scale(0)");
  ContactSection.style.setProperty("opacity", "0");
  viewcontact.style.setProperty("opacity", "0");
  buttonbar.style.setProperty("opacity", "0");
  buttonbar.style.setProperty("transform", "translateY(100%)");
  // firefly.forEach((element) => {
  //   element.style.setProperty("display", "block");
  // });

  homebutton.classList.add("transform-origin-buttons");
  homebutton.classList.remove("transform-up-buttons");

  abt.classList.add("transform-origin-buttons");
  abt.classList.remove("transform-up-buttons");

  client.classList.add("transform-origin-buttons");
  client.classList.remove("transform-up-buttons");

  service.classList.add("transform-origin-buttons");
  service.classList.remove("transform-up-buttons");

  contact.classList.add("transform-origin-buttons");
  contact.classList.remove("transform-up-buttons");

  team.classList.add("transform-origin-buttons");
  team.classList.remove("transform-up-buttons");
}
// ----------galaxy to about part--------------------
function aboutCome() {
  // particles.style.setProperty("opacity", "1");
  // particles.style.setProperty("transform", "translateY(0)");
  canvas.style.setProperty("opacity", "0");
  viewabout.style.setProperty("opacity", "1");
  buttonbar.style.setProperty("opacity", "1");
  buttonbar.style.setProperty("transform", "translateY(0)");
  // aboutlink.style.setProperty("display", "none");
  // aboutusSection.style.setProperty("transform", "translateX(0)");
  aboutusSection.style.setProperty("transform", "scale(1)");
  aboutusSection.style.setProperty("opacity", "1");
 threecontainer.style.setProperty("transform", "scale(1)");
 threecontainer.style.setProperty("opacity", "1");

  // firefly.forEach((element) => {
  //   element.style.setProperty("display", "none");
  // });

  homebutton.classList.remove("transform-origin-buttons");
  homebutton.classList.add("transform-up-buttons");

  abt.classList.remove("transform-origin-buttons");
  abt.classList.add("transform-up-buttons");

  client.classList.remove("transform-origin-buttons");
  client.classList.add("transform-up-buttons");

  service.classList.remove("transform-origin-buttons");
  service.classList.add("transform-up-buttons");

  contact.classList.remove("transform-origin-buttons");
  contact.classList.add("transform-up-buttons");

  team.classList.remove("transform-origin-buttons");
  team.classList.add("transform-up-buttons");
}

function aboutGo() {
  // particles.style.setProperty("opacity", "0");
  // particles.style.setProperty("transform", "translateY(100%)");
  canvas.style.setProperty("opacity", "1");
  // aboutusSection.style.setProperty("transform", "translateX(100%)");
  aboutusSection.style.setProperty("transform", "scale(0)");
  aboutusSection.style.setProperty("opacity", "0");
  threecontainer.style.setProperty("transform", "scale(-10)");
 threecontainer.style.setProperty("opacity", "0");
  viewabout.style.setProperty("opacity", "0");
  buttonbar.style.setProperty("opacity", "0");
  buttonbar.style.setProperty("transform", "translateY(100%)");
  // firefly.forEach((element) => {
  //   element.style.setProperty("display", "block");
  // });

  homebutton.classList.add("transform-origin-buttons");
  homebutton.classList.remove("transform-up-buttons");

  abt.classList.add("transform-origin-buttons");
  abt.classList.remove("transform-up-buttons");

  client.classList.add("transform-origin-buttons");
  client.classList.remove("transform-up-buttons");

  service.classList.add("transform-origin-buttons");
  service.classList.remove("transform-up-buttons");

  contact.classList.add("transform-origin-buttons");
  contact.classList.remove("transform-up-buttons");

  team.classList.add("transform-origin-buttons");
  team.classList.remove("transform-up-buttons");

  missioncontent.style.setProperty("transform", "translateY(-2000px)");
  aboutcontent.style.setProperty("transform", "scale(1)");
  visioncontent.style.setProperty("transform", "translateY(2000px)");
 visionbutton.classList.remove("onclickbutton");
 missionbutton.classList.remove("onclickbutton");
 heading.innerHTML="AXS"
 heading.style.setProperty("margin", "20px");
}
// ----------galaxy to service part--------------------
function ServiceCome() {
  // particles.style.setProperty("opacity", "1");
  // particles.style.setProperty("transform", "translateY(0)");
  canvas.style.setProperty("opacity", "0");
  viewservice.style.setProperty("opacity", "1");
  buttonbar.style.setProperty("opacity", "1");
  buttonbar.style.setProperty("transform", "translateY(0)");
  // aboutlink.style.setProperty("display", "none");
  // aboutusSection.style.setProperty("transform", "translateX(0)");
  ServiceSection.style.setProperty("transform", "scale(1)");
  ServiceSection.style.setProperty("opacity", "1");
 threecontainer.style.setProperty("transform", "scale(1)");
 threecontainer.style.setProperty("opacity", "1");

  // firefly.forEach((element) => {
  //   element.style.setProperty("display", "none");
  // });

  homebutton.classList.remove("transform-origin-buttons");
  homebutton.classList.add("transform-up-buttons");

  abt.classList.remove("transform-origin-buttons");
  abt.classList.add("transform-up-buttons");

  client.classList.remove("transform-origin-buttons");
  client.classList.add("transform-up-buttons");

  service.classList.remove("transform-origin-buttons");
  service.classList.add("transform-up-buttons");

  contact.classList.remove("transform-origin-buttons");
  contact.classList.add("transform-up-buttons");

  team.classList.remove("transform-origin-buttons");
  team.classList.add("transform-up-buttons");
}

function ServiceGo() {
  // particles.style.setProperty("opacity", "0");
  // particles.style.setProperty("transform", "translateY(100%)");
  canvas.style.setProperty("opacity", "1");
  // aboutusSection.style.setProperty("transform", "translateX(100%)");
  ServiceSection.style.setProperty("transform", "scale(0)");
  ServiceSection.style.setProperty("opacity", "0");
  threecontainer.style.setProperty("transform", "scale(-10)");
 threecontainer.style.setProperty("opacity", "0");
  viewservice.style.setProperty("opacity", "0");
  buttonbar.style.setProperty("opacity", "0");
  buttonbar.style.setProperty("transform", "translateY(100%)");
  // firefly.forEach((element) => {
  //   element.style.setProperty("display", "block");
  // });

  homebutton.classList.add("transform-origin-buttons");
  homebutton.classList.remove("transform-up-buttons");

  abt.classList.add("transform-origin-buttons");
  abt.classList.remove("transform-up-buttons");

  client.classList.add("transform-origin-buttons");
  client.classList.remove("transform-up-buttons");

  service.classList.add("transform-origin-buttons");
  service.classList.remove("transform-up-buttons");

  contact.classList.add("transform-origin-buttons");
  contact.classList.remove("transform-up-buttons");

  team.classList.add("transform-origin-buttons");
  team.classList.remove("transform-up-buttons");
}

// about to vision part


let visioncontent= document.querySelector(".vision-content");
let missioncontent= document.querySelector(".mission-content");
let aboutcontent= document.querySelector(".about-content");
let visionbutton= document.querySelector(".vision");
let missionbutton= document.querySelector(".mission");
let arrowbutton= document.querySelector(".arrow");
let heading= document.querySelector(".heading");


function visioncome(){
   

    missioncontent.style.setProperty("transform", "translateY(-2000px)");
   aboutcontent.style.setProperty("transform", "scale(0)");
   visioncontent.style.setProperty("transform", "translateY(0)");
   arrowbutton.style.setProperty("opacity", "1");
  visionbutton.classList.add("onclickbutton");
  missionbutton.classList.remove("onclickbutton");
  heading.innerHTML="Vision"
  heading.style.setProperty("margin", "0px");

}
function missioncome(){
   

    missioncontent.style.setProperty("transform", "translateY(0)");
   aboutcontent.style.setProperty("transform", "scale(0)");
   visioncontent.style.setProperty("transform", "translateY(2000px)");
   arrowbutton.style.setProperty("opacity", "1");
   visionbutton.classList.remove("onclickbutton");
  missionbutton.classList.add("onclickbutton");
  heading.innerHTML="Mission"
  heading.style.setProperty("margin", "0px");

}

function arrowclick(){
  missioncontent.style.setProperty("transform", "translateY(-2000px)");
   aboutcontent.style.setProperty("transform", "scale(1)");
   visioncontent.style.setProperty("transform", "translateY(2000px)");
   arrowbutton.style.setProperty("opacity", "0");
   visionbutton.classList.remove("onclickbutton");
  missionbutton.classList.remove("onclickbutton");
  heading.style.setProperty("margin", "20px");

  heading.innerHTML="AXS"

}

// function visionCome() {
//   // aboutusSection.style.setProperty("transform", "translateX(-100%)");
//   // visionSection.style.setProperty("transform", "translateX(0)");

//   aboutusSection.style.setProperty("transform", "scale(0)");
//   aboutusSection.style.setProperty("opacity", "0");
//   visionSection.style.setProperty("transform", "scale(1)");
//   visionSection.style.setProperty("opacity", "1");
//   viewabout.style.setProperty("opacity", "0");
//   viewvision.style.setProperty("opacity", "1");
//   threecontainer.style.setProperty("transform", "scale(-10)");
//   threecontainer.style.setProperty("opacity", "0");
// }
// function visionGo() {
//   // particles.style.setProperty("opacity", "0");
//   // particles.style.setProperty("transform", "translateY(100%)");
//   // aboutusSection.style.setProperty("transform", "translateX(100%)");
//   canvas.style.setProperty("opacity", "1");
//   // visionSection.style.setProperty("transform", "translateX(100%)");
//   visionSection.style.setProperty("transform", "scale(0)");
//   visionSection.style.setProperty("opacity", "0");
//   viewvision.style.setProperty("opacity", "0");
//   buttonbar.style.setProperty("opacity", "0");
//   buttonbar.style.setProperty("transform", "translateY(100%)");
//   // firefly.forEach((element) => {
//   //   element.style.setProperty("display", "block");
//   // });

//   homebutton.classList.add("transform-origin-buttons");
//   homebutton.classList.remove("transform-up-buttons");

//   abt.classList.add("transform-origin-buttons");
//   abt.classList.remove("transform-up-buttons");

//   client.classList.add("transform-origin-buttons");
//   client.classList.remove("transform-up-buttons");

//   service.classList.add("transform-origin-buttons");
//   service.classList.remove("transform-up-buttons");

//   contact.classList.add("transform-origin-buttons");
//   contact.classList.remove("transform-up-buttons");

//   team.classList.add("transform-origin-buttons");
//   team.classList.remove("transform-up-buttons");
// }

// Navbar to home
function homeComeFromBar() {
  // visionSection.style.setProperty("transform", "translateX(100%)");
  // aboutusSection.style.setProperty("transform", "translateX(100%)");
  // ContactSection.style.setProperty("transform", "translateX(100%)");
  // clientMain.style.setProperty("transform", "translateX(100%)");
  // teamSection.style.setProperty("transform", "translateX(100%)");
  firefly.forEach((element) => {
    element.style.setProperty("display", "none");
  });
  particles.style.setProperty("transform", "translateY(0)");
  particles.style.setProperty("opacity", "1");

  clientMain.style.setProperty("transform", "scale(0)");
  clientMain.style.setProperty("opacity", "0");

  aboutusSection.style.setProperty("transform", "scale(0)");
  aboutusSection.style.setProperty("opacity", "0");

  ContactSection.style.setProperty("transform", "scale(0)");
  ContactSection.style.setProperty("opacity", "0");

  teamSection.style.setProperty("transform", "scale(0)");
  teamSection.style.setProperty("opacity", "0");

  visionSection.style.setProperty("transform", "scale(0)");
  visionSection.style.setProperty("opacity", "0");

  ServiceSection.style.setProperty("transform", "scale(0)");
  ServiceSection.style.setProperty("opacity", "0");
  viewservice.style.setProperty("opacity", "0");

  buttonbar.style.setProperty("opacity", "0");
  buttonbar.style.setProperty("transform", "translateY(100%)");

  content.classList.remove("transform-down");
  content.style.setProperty("opacity", "1");
  viewvision.style.setProperty("opacity", "0");
  viewabout.style.setProperty("opacity", "0");
  viewcontact.style.setProperty("opacity", "0");
  viewclient.style.setProperty("opacity", "0");
  viewteam.style.setProperty("opacity", "0");

  threecontainer.style.setProperty("transform", "scale(-10)");
  threecontainer.style.setProperty("opacity", "0");
}
function AboutComeFromBar() {
  // visionSection.style.setProperty("transform", "translateX(100%)");
  // aboutusSection.style.setProperty("transform", "translateX(0)");
  // ContactSection.style.setProperty("transform", "translateX(100%)");
  // clientMain.style.setProperty("transform", "translateX(100%)");
  // teamSection.style.setProperty("transform", "translateX(100%)");
  clientMain.style.setProperty("transform", "scale(0)");
  clientMain.style.setProperty("opacity", "0");

  aboutusSection.style.setProperty("transform", "scale(1)");
  aboutusSection.style.setProperty("opacity", "1");

  ContactSection.style.setProperty("transform", "scale(0)");
  ContactSection.style.setProperty("opacity", "0");

  teamSection.style.setProperty("transform", "scale(0)");
  teamSection.style.setProperty("opacity", "0");
  ServiceSection.style.setProperty("transform", "scale(0)");
  ServiceSection.style.setProperty("opacity", "0");
  viewservice.style.setProperty("opacity", "0");

  visionSection.style.setProperty("transform", "scale(0)");
  visionSection.style.setProperty("opacity", "0");
  buttonbar.style.setProperty("opacity", "1");
  buttonbar.style.setProperty("transform", "translateY(0)");
  
  viewvision.style.setProperty("opacity", "0");
  viewabout.style.setProperty("opacity", "1");
  viewcontact.style.setProperty("opacity", "0");
  viewclient.style.setProperty("opacity", "0");
  viewteam.style.setProperty("opacity", "0");


  threecontainer.style.setProperty("transform", "scale(1)");
  threecontainer.style.setProperty("opacity", "1");
}
function clientComeFromBar() {
  // visionSection.style.setProperty("transform", "translateX(100%)");
  // aboutusSection.style.setProperty("transform", "translateX(100%)");
  // ContactSection.style.setProperty("transform", "translateX(100%)");
  // clientMain.style.setProperty("transform", "translateX(0)");
  // teamSection.style.setProperty("transform", "translateX(100%)");

  clientMain.style.setProperty("transform", "scale(1)");
  clientMain.style.setProperty("opacity", "1");

  aboutusSection.style.setProperty("transform", "scale(0)");
  aboutusSection.style.setProperty("opacity", "0");

  ContactSection.style.setProperty("transform", "scale(0)");
  ContactSection.style.setProperty("opacity", "0");

  teamSection.style.setProperty("transform", "scale(0)");
  teamSection.style.setProperty("opacity", "0");

  visionSection.style.setProperty("transform", "scale(0)");
  visionSection.style.setProperty("opacity", "0");

  ServiceSection.style.setProperty("transform", "scale(0)");
  ServiceSection.style.setProperty("opacity", "0");
  viewservice.style.setProperty("opacity", "0");

  buttonbar.style.setProperty("opacity", "1");
  buttonbar.style.setProperty("transform", "translateY(0)");

  viewvision.style.setProperty("opacity", "0");
  viewabout.style.setProperty("opacity", "0");
  viewcontact.style.setProperty("opacity", "0");
  viewclient.style.setProperty("opacity", "1");
  viewteam.style.setProperty("opacity", "0");

  threecontainer.style.setProperty("transform", "scale(-10)");
  threecontainer.style.setProperty("opacity", "0");
}
function teamComeFromBar() {
  // visionSection.style.setProperty("transform", "translateX(100%)");
  // aboutusSection.style.setProperty("transform", "translateX(100%)");
  // ContactSection.style.setProperty("transform", "translateX(100%)");
  // clientMain.style.setProperty("transform", "translateX(100%)");
  // teamSection.style.setProperty("transform", "translateX(0)");

  clientMain.style.setProperty("transform", "scale(0)");
  clientMain.style.setProperty("opacity", "0");

  aboutusSection.style.setProperty("transform", "scale(0)");
  aboutusSection.style.setProperty("opacity", "0");

  ContactSection.style.setProperty("transform", "scale(0)");
  ContactSection.style.setProperty("opacity", "0");

  teamSection.style.setProperty("transform", "scale(1)");
  teamSection.style.setProperty("opacity", "1");

  visionSection.style.setProperty("transform", "scale(0)");
  visionSection.style.setProperty("opacity", "0");

  ServiceSection.style.setProperty("transform", "scale(0)");
  ServiceSection.style.setProperty("opacity", "0");
  viewservice.style.setProperty("opacity", "0");

  buttonbar.style.setProperty("opacity", "1");
  buttonbar.style.setProperty("transform", "translateY(0)");

  viewvision.style.setProperty("opacity", "0");
  viewabout.style.setProperty("opacity", "0");
  viewcontact.style.setProperty("opacity", "0");
  viewclient.style.setProperty("opacity", "0");
  viewteam.style.setProperty("opacity", "1");

  threecontainer.style.setProperty("transform", "scale(-10)");
  threecontainer.style.setProperty("opacity", "0");
}
function contactComeFromBar() {
  // visionSection.style.setProperty("transform", "translateX(100%)");
  // aboutusSection.style.setProperty("transform", "translateX(100%)");
  // ContactSection.style.setProperty("transform", "translateX(0)");
  // clientMain.style.setProperty("transform", "translateX(100%)");
  // teamSection.style.setProperty("transform", "translateX(100%)");
  clientMain.style.setProperty("transform", "scale(0)");
  clientMain.style.setProperty("opacity", "0");

  aboutusSection.style.setProperty("transform", "scale(0)");
  aboutusSection.style.setProperty("opacity", "0");

  ContactSection.style.setProperty("transform", "scale(1)");
  ContactSection.style.setProperty("opacity", "1");

  teamSection.style.setProperty("transform", "scale(0)");
  teamSection.style.setProperty("opacity", "0");

  visionSection.style.setProperty("transform", "scale(0)");
  visionSection.style.setProperty("opacity", "0");

  ServiceSection.style.setProperty("transform", "scale(0)");
  ServiceSection.style.setProperty("opacity", "0");
  viewservice.style.setProperty("opacity", "0");

  buttonbar.style.setProperty("opacity", "1");
  buttonbar.style.setProperty("transform", "translateY(0)");
  
  viewvision.style.setProperty("opacity", "0");
  viewabout.style.setProperty("opacity", "0");
  viewcontact.style.setProperty("opacity", "1");
  viewclient.style.setProperty("opacity", "0");
  viewteam.style.setProperty("opacity", "0");

  threecontainer.style.setProperty("transform", "scale(-10)");
  threecontainer.style.setProperty("opacity", "0");
}
function ServiceComeFromBar() {
  // visionSection.style.setProperty("transform", "translateX(100%)");
  // aboutusSection.style.setProperty("transform", "translateX(100%)");
  // ContactSection.style.setProperty("transform", "translateX(0)");
  // clientMain.style.setProperty("transform", "translateX(100%)");
  // teamSection.style.setProperty("transform", "translateX(100%)");
  clientMain.style.setProperty("transform", "scale(0)");
  clientMain.style.setProperty("opacity", "0");

  aboutusSection.style.setProperty("transform", "scale(0)");
  aboutusSection.style.setProperty("opacity", "0");

  ContactSection.style.setProperty("transform", "scale(0)");
  ContactSection.style.setProperty("opacity", "0");

  teamSection.style.setProperty("transform", "scale(0)");
  teamSection.style.setProperty("opacity", "0");

  ServiceSection.style.setProperty("transform", "scale(1)");
  ServiceSection.style.setProperty("opacity", "1");
  viewservice.style.setProperty("opacity", "1");
  buttonbar.style.setProperty("opacity", "1");
  buttonbar.style.setProperty("transform", "translateY(0)");
  
  viewvision.style.setProperty("opacity", "0");
  viewabout.style.setProperty("opacity", "0");
  viewcontact.style.setProperty("opacity", "1");
  viewclient.style.setProperty("opacity", "0");
  viewteam.style.setProperty("opacity", "0");

  threecontainer.style.setProperty("transform", "scale(-10)");
  threecontainer.style.setProperty("opacity", "0");
}
