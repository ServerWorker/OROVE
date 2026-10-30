const toggle=document.querySelector('.menu-toggle');
const links=document.querySelector('.nav-links');
if(toggle&&links){toggle.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰';});}
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('[data-order-form]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const name=d.get('name')||'there';const product=d.get('product')||'Perfume bottle';const qty=d.get('quantity')||'Not specified';const color=d.get('color')||'Not specified';const message=`Hi Aurelle Atomizers! I'd like to enquire/order.\\nName: ${name}\\nProduct: ${product}\\nColour: ${color}\\nQuantity: ${qty}\\nMessage: ${d.get('message')||'Please share details and pricing.'}`;window.open('https://wa.me/917981911509?text='+encodeURIComponent(message),'_blank','noopener');}));
