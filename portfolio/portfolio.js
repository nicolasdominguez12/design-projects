'use strict';

const repo = 'https://github.com/nicolasdominguez12/mechanical-design-projects';
const projects = [
  {
    id: 'prompt', folder: 'prompt-to-cad', name: 'Prompt-to-CAD',
    category: 'Mechanisms · Parametric modeling', runtime: '1:51', kind: 'Prototype demo',
    summary: 'Built a browser prototype that turns plain-English mechanism concepts into interactive 3D models with adjustable parameters.',
    proof: ['0:34 · Inspect the planetary gearset with orbit, zoom, and animation.', '1:06 · Adjust parameters and observe the geometry update.', '1:42 · Inspect the rack-and-pinion example and its rotary-to-linear motion.']
  },
  {
    id: 'drawings', folder: 'CAD%20Drawings', name: 'Technical CAD Drawings',
    category: 'SolidWorks · Engineering drawings', runtime: '0:24', kind: 'Drawing walkthrough',
    summary: 'Created five SolidWorks drawing sheets that communicate part geometry through dimensions and multiple views.',
    proof: ['Inspect the five original sheets and compare how each communicates geometry.', 'Open an individual PDF on GitHub to zoom in on dimensions.']
  },
  {
    id: 'matselect', folder: 'matselect-ai', name: 'MatSelect AI',
    category: 'Materials · Product development', runtime: '0:31', kind: 'Prototype demo',
    summary: 'Prototyped a workflow for comparing material candidates across performance, manufacturing, cost, and sustainability constraints.',
    proof: ['The recording shows a ranked material shortlist, comparative charts, and selection rationale.', 'The case study explains the inputs and limits of the prototype.']
  },
  {
    id: 'pump', folder: 'hydraulic-pump', name: 'Hydraulic Pump Assembly',
    category: 'SolidWorks · Assembly design', runtime: '0:21', kind: 'Drawing walkthrough',
    summary: 'Modeled a hydraulic pump in SolidWorks and documented how its housing, shaft, and internal components fit together.',
    proof: ['Compare the installed component positions with the exploded layout.', 'The drawings document assembly geometry and part placement.'],
    files: [
      ['Exploded assembly PDF', 'hydraulic-pump/Hydraulic%20pump%20assembly%20exploded%20view%20pdf.pdf'],
      ['Assembled view PDF', 'hydraulic-pump/Hydraulic%20pump%20assembly%20pdf.PDF']
    ]
  },
  {
    id: 'hedge', folder: 'hedgepilotx', name: 'HedgePilotX',
    category: 'Additional work · Simulation', runtime: '1:32', kind: 'Prototype demo',
    summary: 'Built a simulation dashboard to compare how hedging policies trade off risk and transaction costs under changing conditions.',
    proof: ['Inspect controller comparisons, path replay, and simulated stress scenarios.', 'The demo presents simulated runs with controls for risk budgets and execution costs.']
  }
];

const grid = document.querySelector('#project-grid');
const dialog = document.querySelector('#project-dialog');
const playIcon = '<svg aria-hidden="true" viewBox="0 0 20 20"><path d="M7 3.2v13.6L17 10z"/></svg>';
const sourceUrl = project => repo + '/tree/main/' + project.folder;

grid.innerHTML = projects.map(p => `
  <article class="project" aria-labelledby="title-${p.id}">
    <button type="button" class="preview" data-project="${p.id}" aria-label="Watch ${p.name} ${p.kind.toLowerCase()}, ${p.runtime}">
      <img src="https://folio-audit-nicolas-md.cozy-ant-2102.chatgpt.site/media/${p.id}.webp" width="1440" height="810" loading="${['pump', 'prompt'].includes(p.id) ? 'eager' : 'lazy'}" alt="">
      <span class="play">${playIcon} ${p.runtime}</span>
    </button>
    <div class="project-copy">
      <p class="eyebrow">${p.category}</p>
      <h3 id="title-${p.id}">${p.name}</h3>
      <p>${p.summary}</p>
      <div class="project-actions">
        <button class="text-link" data-project="${p.id}">${p.kind === 'Drawing walkthrough' ? 'Watch walkthrough' : 'Watch demo'}</button>
        <a class="text-link" href="${sourceUrl(p)}">GitHub files <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </article>`).join('');

grid.addEventListener('click', event => {
  const trigger = event.target.closest('button[data-project]');
  if (!trigger) return;

  const p = projects.find(project => project.id === trigger.dataset.project);
  dialog.innerHTML = `
    <div class="dialog-content">
      <div class="dialog-head">
        <div><p class="eyebrow">${p.kind} · ${p.runtime}</p><h2 id="dialog-title">${p.name}</h2></div>
        <form method="dialog"><button autofocus class="close" aria-label="Close project">×</button></form>
      </div>
      <video controls playsinline preload="metadata" poster="https://folio-audit-nicolas-md.cozy-ant-2102.chatgpt.site/media/${p.id}.webp" aria-label="${p.name} ${p.kind.toLowerCase()}">
        <source src="https://folio-audit-nicolas-md.cozy-ant-2102.chatgpt.site/media/${p.id}.mp4" type="video/mp4">
      </video>
      <a class="text-link dialog-video-link" href="https://folio-audit-nicolas-md.cozy-ant-2102.chatgpt.site/media/${p.id}.mp4">Open video file <span aria-hidden="true">↗</span></a>
      <div class="dialog-body">
        <p>${p.summary}</p>
        <h3>What to look for</h3>
        <ul>${p.proof.map(item => '<li>' + item + '</li>').join('')}</ul>
        <div class="project-actions">
          <a class="text-link" href="${sourceUrl(p)}">View GitHub documentation ↗</a>
          ${(p.files || []).map(([label, path]) => `<a class="text-link" href="${repo}/blob/main/${path}">${label} ↗</a>`).join('')}
        </div>
      </div>
    </div>`;
  dialog.showModal();
  dialog.querySelector('video').play().catch(() => {});
});

dialog.addEventListener('close', () => { dialog.querySelector('video')?.pause(); });
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

const motion = matchMedia('(prefers-reduced-motion: reduce)');
if (!motion.matches) {
  const art = document.querySelector('.hero-art');
  let queued = false;
  window.addEventListener('scroll', () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      art.style.setProperty('--drift', Math.min(19, window.scrollY * .045) + 'px');
      queued = false;
    });
  }, { passive: true });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.animate([{ opacity: .5, transform: 'translateY(9px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 420, easing: 'ease-out' });
        observer.unobserve(entry.target);
      }
    }, { threshold: .16 });
    document.querySelectorAll('.project').forEach(card => observer.observe(card));
  }
}
