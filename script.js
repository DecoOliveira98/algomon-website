//wait the DOM load at full to start JS
document.addEventListener("DOMContentLoaded", () => {

     const fireBunny = document.getElementById("fireBunny");

    if (fireBunny) {
    fireBunny.addEventListener("dblclick", () => {
      
      document.body.style.backgroundColor = "orange";
      alert(" now the fire Bunny is furious, be ready for a fight!");
     });
   }


     // Event 1: Click
     // call bottom with ID "clickHere"
    
     const button= document.getElementById("clickHere");
    
     //if bottom exist...

     if (button) {
       button.addEventListener("click", function () {
         alert("Bait, You have been hacked! \nJoking!! Haha ");
       });
     }

      // Event 2: Form Submission
      // get a form and the message
    const form = document.getElementById("signupForm");
    const message = document.getElementById("formMessage");
  
    if (form) {
      //if form exist, will run event "submit"
      form.addEventListener("submit", function (e) {
        e.preventDefault(); //check for no error!!
        const name = form.name;
        const email = form.email;
  
        if (name == true && email == true) {
            form.reset();
        } else {
          message.textContent = "Please complete the required options";
          message.style.color = "red";
        }
      });
    }
      //Event 3: MouseOver
      //id focus title changing color when mouse get over there
      const title = document.getElementById('title');

      title.addEventListener('mouseover', () => {
        title.style.color = 'darkblue';
        title.style.backgroundSize = '2rem';
      });
      
      title.addEventListener('mouseout', () => {
        title.style.color = '';
      });
      

 

});
