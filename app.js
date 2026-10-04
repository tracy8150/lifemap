const filterButtons = document.querySelectorAll('[data-filter]');
const typedCards = document.querySelectorAll('[data-type]');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle('is-active', item === button));
    typedCards.forEach((card) => {
      card.classList.toggle('is-muted', filter !== 'all' && card.dataset.type !== filter);
    });
  });
});

document.querySelector('#printButton')?.addEventListener('click', () => window.print());

const menuButton = document.querySelector('#menuButton');
const mobileNav = document.querySelector('#mobileNav');

menuButton?.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

mobileNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const sections = [...document.querySelectorAll('main > section[id]')];
const navLinks = [...document.querySelectorAll('.rail-nav a')];

const setActiveSection = () => {
  const marker = window.scrollY + window.innerHeight * 0.35;
  let current = sections[0]?.id;
  sections.forEach((section) => {
    if (section.offsetTop <= marker) current = section.id;
  });
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
};

window.addEventListener('scroll', setActiveSection, { passive: true });
setActiveSection();
