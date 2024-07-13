/*=============== SHOW MENU ===============*/
const scriptURL = 'https://script.google.com/macros/s/AKfycbye9VNOl5mwRoEF8sxYYIE37sGXbWn6nTBcbgpeRtU2cZAOlM4pkfrfVAEhEnYyBcPz/exec'
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

document.addEventListener('DOMContentLoaded', () => {
   const navMenu = document.getElementById('nav-menu'),
         navToggle = document.getElementById('nav-toggle'),
         navClose = document.getElementById('nav-close');

   /* Menu show */
   if (navToggle) {
       navToggle.addEventListener('click', () => {
           navMenu.classList.add('show-menu');
       });
   }

   /* Menu hidden */
   if (navClose) {
       navClose.addEventListener('click', () => {
           navMenu.classList.remove('show-menu');
       });
   }

   /* Close menu when a link is clicked */
   document.querySelectorAll('.nav ul li a').forEach(link => {
       link.addEventListener('click', () => {
           navMenu.classList.remove('show-menu');
       });
   });
});




const form = document.forms['contact-form']
getComput

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
