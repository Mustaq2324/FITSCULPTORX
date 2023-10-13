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
   const gender = document.querySelector('input[name="gender"]:checked').value;
   const height = document.getElementById("height").value;
   const weight = document.getElementById("weight").value;
   const age = document.getElementById("age").value;
   const goal = document.getElementById("goal").value;
   const mail = document.getElementById("mail").value;

   const message = `Registration Form\nName: ${name}\nGender: ${gender}\nAge: ${age}\nHeight: ${height} cm\nWeight: ${weight} kg\nGoal: ${goal}\nContact: ${contact}\nEmail: ${mail}`;
   const encodedMessage = encodeURIComponent(message);
   const whatsappURL = `https://wa.me/917695825150/?text=${encodedMessage}`;

   window.open(whatsappURL, "_blank").focus();

//to reset
   document.getElementById("name").value = "";
  document.getElementById("contact").value = "";
  document.querySelector('input[name="gender"]:checked').checked = false;
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("age").value = "";
  document.getElementById("goal").value = "";
  document.getElementById("mail").value = "";

  document.getElementById("show").textContent="Thanks you for enrolling us 💖"
}

AOS.init();