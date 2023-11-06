//side-navbar
let bars=document.getElementById("bars")
let sideNav=document.getElementById("sidenav")
bars.addEventListener("click",function(){
   sideNav.classList.toggle("show")
})

//To Send Whatsapp Messaege
function sendWhatsAppMessage() {
   const name = document.getElementById("name").value;
   const contact = document.getElementById("contact").value; // Get the contact number input value
   const gender = document.getElementById('gender').value;
   const height = document.getElementById("height").value;
   const weight = document.getElementById("weight").value;
   const age = document.getElementById("age").value;
   const goal = document.getElementById("goal").value;
   const mail = document.getElementById("mail").value;
   const package = document.getElementById('package').value;

   const message = `Registration Form\nName: ${name}\nGender: ${gender}\nAge: ${age}\nHeight: ${height} cm\nWeight: ${weight} kg\nGoal: ${goal}\nContact: ${contact}\nEmail: ${mail}\nPachage: ${package}`;
   const encodedMessage = encodeURIComponent(message);
   const whatsappURL = `https://wa.me/917695825150/?text=${encodedMessage}`;

   window.open(whatsappURL, "_blank").focus();

//to reset
   document.getElementById("name").value = "";
  document.getElementById("contact").value = "";
  document.getElementById('gender').value="";
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("age").value = "";
  document.getElementById("goal").value = "";
  document.getElementById("mail").value = "";
  document.getElementById('package').value="";
  document.getElementById("show").textContent="Thanks you for enrolling us 💖"
}

AOS.init();
//navbar scroll
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY >= 100) {
    navbar.classList.add("bg-black-scroll");
  } else {
    navbar.classList.remove("bg-black-scroll");
  }
});
//smoth beahvior

  document.addEventListener("DOMContentLoaded", function() {
    // Select all links with the "href" attribute starting with "#"
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();

        // Get the target element's ID from the link's "href" attribute
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          // Scroll to the target element with smooth behavior
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  });
  //scroll down to up
  const scrollToTopButton = document.getElementById('scrollToTopButton');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 100) {
    // Show the button when scrolling down 100px
    scrollToTopButton.style.display = 'flex';
  } else {
    // Hide the button when not scrolling or when at the top
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  // Scroll to the top smoothly when the button is clicked
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
//popup

const popup = document.getElementById("popup");
function pop(){
  popup.classList.add("top-0")
}
function closepopup(){
popup.classList.remove("top-0")
}