function scrollToSection() {
  const targetSection = location.hash.replace('#', '');
  const target = document.getElementById(targetSection);
  if (!target) return;

  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

scrollToSection();