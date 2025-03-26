// Click + Form
document.addEventListener("DOMContentLoaded", function () {

    // Event 1: Click
    const btn = document.getElementById("clickHere");

    if (btn) {
      btn.addEventListener("click", function () {
        alert("Bait, You have been hacked! \nJoking!! Haha ");
      });
    }
  
    // Event 2: Form Submission
    const form = document.getElementById("signupForm");
    const message = document.getElementById("formMessage");
  
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
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

    const gameTitle = document.getElementById('gameTitle');

    gameTitle.addEventListener('mouseover', () => {
      gameTitle.style.color = 'darkblue';
      gameTitle.style.backgroundSize = '2rem';
    });
    gameTitle.addEventListener('mouseout', () => {
      gameTitle.style.color= '';
    });

    const darkModeClick = document.getElementById('darkMode');

    darkModeClick.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });

  });
  