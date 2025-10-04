document.addEventListener('DOMContentLoaded', () => {
  const homeLink = document.querySelector('nav ul li:nth-child(1) a');
  const aboutLink = document.querySelector('nav ul li:nth-child(2) a');
  const contactLink = document.querySelector('nav ul li:nth-child(3) a');

  function zoomInEffect(id) {
    const element = document.getElementById(id);
    element.classList.add('zoom-in-effect');

    // Alisin ang animation class pagkatapos ng 0.5s (tagal ng animation)
    setTimeout(() => {
      element.classList.remove('zoom-in-effect');
    }, 500);
  }

  homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('index').scrollIntoView({ behavior: 'smooth' });
  });

  aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    const sectionId = 'course-offerings';
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    zoomInEffect(sectionId);
  });

  contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    const sectionId = 'contact-section';
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    zoomInEffect(sectionId);
  });
});
