// Váriaveis
// Uma forma de Identificar quem é quem
// Da um nome pra um pedacinho de código
// É como se vc criasse uma pasta, para guardar o quiser

// Funções
// É um trecho de código que só executa, quando é chamado
// document = ir no HTML
// querySelector = busca o que eu quiser que ele busque

// let formulario = document.querySelector(".formulario")

// function aparecerformulario(){

//     formulario.style.left = "50%"

// }

// function desaparecerformulario(){
// formulario.style.left = "-50%"

// }
// Loading screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
    }, 1500);
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links'); 

if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('mobile');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navLinks.classList.remove('mobile');
            navLinks.classList.remove('active');
        });
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.8)';
        }
    }
});

// Interactive car images
document.querySelectorAll('.car-image').forEach(image => {
    image.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.05) rotateY(5deg)';
    });

    image.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1) rotateY(0deg)';
    });
});

// Feature cards hover effect
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.boxShadow = '0 20px 40px rgba(255, 0, 128, 0.2)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.boxShadow = 'none';
    });
});
