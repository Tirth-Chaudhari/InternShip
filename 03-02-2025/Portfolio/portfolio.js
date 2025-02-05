const projects = document.querySelectorAll(".common-project");
    function handleScroll() {        
       projects.forEach((project) => {
           const projectPosition = project.getBoundingClientRect().top;
           const windowHeight = window.innerHeight;

           if (projectPosition < windowHeight - 100) {
               project.classList.add("show");
           }
       });
   }

   window.addEventListener("scroll", handleScroll);
   handleScroll(); 



  