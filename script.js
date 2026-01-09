// التحكم في القائمة (Mobile Menu)
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// إغلاق المنيو عند الضغط على أي رابط
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// تغيير شفافية الناف بار عند النزول (Scroll)
window.onscroll = () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        nav.style.background = '#000';
    } else {
        nav.style.background = 'rgba(0,0,0,0.9)';
    }
};