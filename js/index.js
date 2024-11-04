const bar = document.querySelector("#bar");
const nav = document.querySelector("#navbar");
const close = document.querySelector("#close");

if (bar) {
    bar.addEventListener("click", e =>{
        nav.classList.add("active");
    } )
}

if (close) {
    close.addEventListener("click", e =>{
        nav.classList.remove("active");
    } )
}



 // Get the navbar element
 const navbar = document.querySelector("#header");


 // Get the offset position of the navbar
 const sticky = navbar.offsetTop + 145;

 // Add the sticky class to the navbar when you reach its scroll position
 // Remove the sticky class when you leave the scroll position
 function stickyNavbar() {
    //  console.log(window.pageYOffset);
     if (window.pageYOffset >= sticky) {
         navbar.classList.add("sticky");
     } else {
         navbar.classList.remove("sticky");
     }
 }
 // When the user scrolls the page, execute stickyNavbar
 window.onscroll = function() {
     stickyNavbar();
 };



 


 // Animations


  ScrollReveal().reveal("section", {
    origin: "bottom",
    distance: "20px",
    opacity: 0,
    duration: 900,
    delay: 100,
  });

  ScrollReveal().reveal(".sign_in", {
    origin: "bottom",
    distance: "20px",
    opacity: 0,
    duration: 900,
    delay: 100,
  });
  
  ScrollReveal().reveal("footer", {
    origin: "bottom",
    distance: "20px",
    opacity: 0,
    duration: 900,
    delay: 100,
  });

  let fa_bookmark = document.querySelectorAll(".fa-bookmark");

  fa_bookmark.forEach(element => {
      element.addEventListener("click", e => {
          if (element.style.color === "rgb(4, 173, 230)") {
            alert("Do You Want Remove Bookmark");
              element.style.color = ""; // Resets to the default color
          } else {
            alert("You Can Add A Bookmark");
              element.style.color = "#04ADE6"; // Sets to blue
          }
      });
  });
  