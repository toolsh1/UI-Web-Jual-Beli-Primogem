// JavaScript
const menuLinks = document.querySelectorAll('.footer a');

menuLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.classList.add('hover:bg-gray-700');
  });

  link.addEventListener('mouseout', () => {
    link.classList.remove('hover:bg-gray-700');
  });
});
