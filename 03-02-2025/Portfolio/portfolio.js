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

  
    function scrollToSection(sectionId) 
    {
        const nav=document.querySelector('nav');
        
        const List=nav.getElementsByTagName('li');
        
        for(li of List)
        {
            li.classList.remove('active')            
            if(li.textContent==sectionId)
            {
                li.classList.add('active')
            }
        }
        
        
        
        const section = document.getElementById(sectionId);
        
        if (section) {
            const offset = 80; 
            const sectionPosition = section.getBoundingClientRect().top+window.scrollY - offset;
            
            
            
            window.scrollTo({
                top: sectionPosition,
                behavior: "smooth"
            });
        }
    }
   

   



  