const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.navigation');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelector('.theme-toggle').addEventListener('click',()=>{document.body.classList.toggle('light');});
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelector('#contactForm').addEventListener('submit',event=>{
  event.preventDefault();
  const name=document.querySelector('#name').value.trim();
  const email=document.querySelector('#email').value.trim();
  const message=document.querySelector('#message').value.trim();
  const subject=encodeURIComponent(`Portfolio message from ${name}`);
  const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href=`mailto:ansharahyaqoob801@gmail.com?subject=${subject}&body=${body}`;
});
