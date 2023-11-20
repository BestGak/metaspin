const menuBtn = document.querySelector('.menu-btn');
const menuLinks = document.querySelectorAll('.menu nav ul li a');
menuBtn.addEventListener('click' , () => document.querySelector('html').classList.toggle('active'));
menuLinks.forEach((item) => item.addEventListener('click' , () =>  document.querySelector('html').classList.toggle('active')));

// Behavior Scroll
document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('header').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});
