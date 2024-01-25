/* == scroll reveal ==  */
   function toggleMode() {    
     light();  
    }

    function light(){

          const body = document.body;
          const logo = document.querySelector(".logo");
          const icon = document.querySelector(".icon");
          const about = document.querySelector(".about");
          const portfolio=document.querySelector(".portfolio");
          const footer = document.querySelector(".footer");
          const contact = document.querySelector(".contact");
        


           body.classList.toggle("light-mode");
           logo.classList.toggle("logo-dark");
           icon.classList.toggle("logo-dark");
           about.classList.toggle("grey");
           portfolio.classList.toggle("grey");
           footer.classList.toggle("grey");
           
        
    }

   let type =new type('#element', {
   strings: ['Web Development', 'Software development', 'Front-End'],
   typeSpeed: 100,
 

});



