document.querySelectorAll('a.zoom').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();const lb=document.getElementById('lb');
lb.querySelector('img').src=a.href;lb.querySelector('img').alt=a.querySelector('img').alt;lb.classList.add('open');lb.querySelector('button').focus();}));
const lb=document.getElementById('lb');lb.addEventListener('click',e=>{if(e.target.tagName!=='IMG')lb.classList.remove('open')});
document.addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('open')});