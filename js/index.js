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
 const sticky = navbar.offsetTop + 600;

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
