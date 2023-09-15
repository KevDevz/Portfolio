
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 var tabLinks = document.getElementsByClassName('tab-links');
 var tabContents = document.getElementsByClassName('tab-contents');

 function openTab(tabName){
    for(let tabLink of tabLinks){
       tabLink.classList.remove("active-link")
    }
    for(let tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab')
 }

function handleScroll() {
   var navbar = document.querySelector('.navbar');
   
   if (window.scrollY > 0) {
     navbar.classList.add('show-bg');
   } else {
     navbar.classList.remove('show-bg'); 
   }
 }
 window.addEventListener('scroll', handleScroll);
 