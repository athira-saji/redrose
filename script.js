const menuToggle = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');
const navLinks = navbar.querySelectorAll('a');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('showing');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navbar.classList.remove('showing');
        }
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navbar.classList.remove('showing');
    }
});
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})