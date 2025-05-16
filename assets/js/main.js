function initNavbar() {
  const mobileMenu = document.getElementById('mobile-menu');
  const menu = document.querySelector('.navbar__menu');

  if (mobileMenu && menu) {
    mobileMenu.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  }
}