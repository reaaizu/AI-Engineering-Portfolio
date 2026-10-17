document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) toggle.addEventListener('click', () => links.classList.toggle('open'));

  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // Portfolio term selector: all terms are ready to fill in as your journey grows.
  const termButtons = document.querySelectorAll('[data-term]');
  const termPanels = document.querySelectorAll('[data-term-panel]');
  function showTerm(term) {
    termButtons.forEach(b => b.classList.toggle('active', b.dataset.term === term));
    termPanels.forEach(p => p.classList.toggle('hidden', p.dataset.termPanel !== term));
  }
  termButtons.forEach(b => b.addEventListener('click', () => showTerm(b.dataset.term)));
  if (termButtons.length) showTerm('1Q2026-2027');

  // Reflection cards open as individual readable entries.
  const entries = {
    'When I first entered Mapua university': 'My first day at Mapúa University was a mix of excitement, nervousness, and curiosity. It felt strange knowing that I was finally starting a new chapter of my life. Before that day, I had so many thoughts running through my mind. I wondered what my experience would be like, whether I would easily adjust to the new environment, and whether I would be able to handle the challenges of college life. When I arrived at Mapúa, I realized that college was going to be different from what I was used to. Seeing new faces, unfamiliar classrooms, and students who were also starting their own journeys made me feel both nervous and excited. At first, I was unsure of what to expect, but as the day went on, I slowly began to feel more comfortable. Even though everything was still new to me, I reminded myself that it was okay to feel lost or confused because everyone had to start somewhere.',
    'Fun with friends': 'One of the things that made my college experience at Mapúa more memorable was meeting my friends. At first, I felt a little nervous because I was surrounded by people I barely knew. Starting college in a new environment was already a big adjustment, and the thought of making new friends made me feel both excited and shy. I wondered if I would find people I could be comfortable with and share my college experiences with. As time passed, I slowly got to know the people around me. What started as simple conversations eventually turned into moments of laughter, jokes, and getting to know each other better. It felt nice to have people I could talk to, especially when we were all experiencing the same things as new college students. Even the simplest moments, like talking between classes or laughing about random things, made my days at Mapúa more enjoyable.',
    'The first exams': 'My first exams at Mapúa were a nice experience for me. Before the exams, I prepared a bit by reviewing my lessons and going over the topics that I thought were important. I knew that exams were a normal part of college life, so I just did what I could to prepare myself. I did not feel too nervous about it, and I simply treated it as another experience that I needed to go through as a college student. When the exam days arrived, I answered the questions to the best of my ability. Some questions were easy to understand because I remembered the lessons, while others required me to think a little more. I felt that my performance was okay. It was not necessarily perfect, but I was satisfied with how I handled the exams, especially since it was my first time experiencing college exams at Mapúa.',
    'The first pass': 'First pass in CM011, reviewed for the whole day, didnt sleep, worth it.',
    'The first half score': 'The Kaya pa to mabawi" score HAHAHAHAAH',
    'The first “bagsak” score, 11/100 sa Math165 HAHAHAHAHUHUHU': 'AWTS PAIN PIGHATI LUMBAY HINAGPIS KIROT SAKIT PAGTANGIS IYAK LUNGKOT SIPHAYO DALAMHATI',
    'The Procrastination, The Regrets': '“Mamaya na” ayun nagka I',
    'The Acceptance Stage': 'Acceptance does not mean giving up. It means being honest about where I am, forgiving myself for what I did not know yet, and choosing what to do next.'
  };
  document.querySelectorAll('[data-reflection]').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.dataset.reflection;
      const modal = document.getElementById('reflection-modal');
      if (!modal) return;
      modal.querySelector('[data-modal-title]').textContent = title;
      modal.querySelector('[data-modal-body]').textContent = entries[title] || 'This entry is ready for you to personalize as your journey continues.';
      modal.classList.remove('hidden');
      modal.scrollIntoView({behavior:'smooth', block:'center'});
    });
  });
  const closeModal = document.querySelector('[data-close-modal]');
  if (closeModal) closeModal.addEventListener('click', () => document.getElementById('reflection-modal').classList.add('hidden'));

  const contactForm = document.querySelector('#contact-form');
  if (contactForm) contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(contactForm);
    const subject = encodeURIComponent(data.get('subject') || 'Portfolio inquiry');
    const body = encodeURIComponent(`Hi Andrea,\n\n${data.get('message')}\n\nFrom: ${data.get('name')}\nReply email: ${data.get('email')}`);
    // Replace the placeholder email in contact.html before publishing.
    window.location.href = `mailto:YOUR_EMAIL@example.com?subject=${subject}&body=${body}`;
    document.querySelector('#form-note').textContent = 'Your email app should open with this message. Add your real email address in assets/main.js before publishing.';
  });
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
});
