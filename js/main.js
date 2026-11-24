{
  // Mobile menu
  const btn = document.querySelector('.menu-btn');
  const nav = document.getElementById('site-nav');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Footer year
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());

  // Enquiry form. On Netlify the form posts normally and Netlify Forms
  // stores it, then shows thank-you.html. In a preview (not on Netlify),
  // nothing can be sent, so we say so instead of pretending it was sent.
  const form = document.querySelector('form[data-netlify]');
  const done = document.getElementById('form-done');
  const isPreview = window.self !== window.top || location.protocol === 'file:';
  if (form && done && isPreview) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      form.hidden = true;
      done.classList.add('show');
      done.focus();
    });
  }
}
