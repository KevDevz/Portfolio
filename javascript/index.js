
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

 //navbar
 let lastScrollTop = 0;

 window.addEventListener('scroll', function() {
     const navbar = document.querySelector('.navbar');
     const scrollTop = window.scrollY || document.documentElement.scrollTop;

     if (scrollTop > lastScrollTop) {
         navbar.classList.add('hide');
     } else {
         navbar.classList.remove('hide');
     }

     lastScrollTop = scrollTop;
 });

 //see more
 document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".projects"); // Change ".project" to ".projects"
    const seeMoreButton = document.getElementById("see-more-button");

    let visibleProjects = 4; // Initial number of visible projects
    const increment = 3; // Number of projects to add/remove when clicking "See More"/"See Less"
    const totalProjects = projects.length;

    // Show/hide projects function
    function toggleProjects() {
      for (let i = 0; i < totalProjects; i++) {
        if (i < visibleProjects) {
          projects[i].classList.add("visible");
        } else {
          projects[i].classList.remove("visible");
        }
      }

      // Toggle "See More"/"See Less" button based on visibility
      if (visibleProjects < totalProjects) {
        seeMoreButton.textContent = "See More";
      } else {
        seeMoreButton.innerHTML = 'See Less <i class="fa-solid fa-arrow-up"></i>';

      }
    }

    toggleProjects(); // Initially show the first few projects

    // "See More" button click event
    seeMoreButton.addEventListener("click", function () {
      if (visibleProjects < totalProjects) {
        visibleProjects += increment;
      } else {
        visibleProjects = 4; // Reset to initial state when clicking "See Less"
      }
      toggleProjects();
    });
  });

//modal
$(document).ready(function() {
    // Initialize each carousel
    $('#mangoCarousel').carousel();
    $('#appleCarousel').carousel();
    $('#bananaCarousel').carousel();
  });