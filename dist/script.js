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
   const age = document.getElementById("age").value;
   const goal = document.getElementById("goal").value;
   const mail = document.getElementById("mail").value;

   const message = `Registration Form
                  Name: ${name}
                  Contact Number: ${contact}
                  Sex: ${gender}
                  Age: ${age}
                  Goal: ${goal}
                  Mail-Id: ${mail}`;

   const encodedMessage = encodeURIComponent(message);
   const whatsappURL = `https://wa.me/917695825150/?text=${encodedMessage}`;

   window.open(whatsappURL, "_blank").focus();

//to reset
   document.getElementById("name").value = "";
  document.getElementById("contact").value = "";
  document.querySelector('input[name="gender"]:checked').checked = false;
  document.getElementById("age").value = "";
  document.getElementById("goal").value = "";
  document.getElementById("mail").value = "";
}