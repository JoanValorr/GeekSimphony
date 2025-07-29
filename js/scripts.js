document.addEventListener('DOMContentLoaded', () => {
  // Menu toggle
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  toggle.addEventListener('click', () => links.classList.toggle('open'));

  // Scroll reveal
  const reveal = () => {
    document.querySelectorAll('.scroll-reveal').forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 60) el.classList.add('visible');
    });
  };
  window.addEventListener('scroll', reveal);
  reveal();

  // FAQ toggle (en pages faq.html)
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const ans = btn.nextElementSibling;
      ans.style.display = ans.style.display === 'block' ? 'none' : 'block';
    });
  });

  // Blog "Leer más"
  document.querySelectorAll('.btn-inline').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-target');
      const full = document.getElementById(id);
      full.style.display = full.style.display === 'block' ? 'none' : 'block';
      btn.textContent = full.style.display === 'block' ? 'Leer menos' : 'Leer más';
    });
  });

  // Pochita follower
  const pochita = document.getElementById('pochita-follower');
  if (pochita) {
    document.addEventListener('mousemove', e => {
      pochita.style.left = e.pageX + 'px';
      pochita.style.top = e.pageY + 'px';
    });
  }

  // Page transition (fade out on link click)
  document.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href && !href.startsWith('#') && a.target !== '_blank') {
        e.preventDefault();
        document.body.classList.add('fade-out');
        setTimeout(() => window.location = href, 400);
      }
    });
  });
});
