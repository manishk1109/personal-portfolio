/*=============== SHOW MENU ===============*/
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




function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        const url = 'https://script.google.com/macros/s/AKfycbye9VNOl5mwRoEF8sxYYIE37sGXbWn6nTBcbgpeRtU2cZAOlM4pkfrfVAEhEnYyBcPz/exec';
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('message', message);

        fetch(url, { method: 'POST', body: formData })
            .then(response => response.json())
            .then(data => {
                document.getElementById('success-message').style.display = 'block';
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('message').value = '';
            })
            .catch(error => console.error('Error!', error.message));
    }
}
