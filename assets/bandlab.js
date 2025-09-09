/*
File: assets/bandlab.js
Purpose: Optional helper to render individual track embeds from data attributes.
Usage: <div data-bandlab-track="TRACK_UUID"></div>
*/
(function () {
const nodes = document.querySelectorAll('[data-bandlab-track]');
nodes.forEach((el) => {
const id = el.getAttribute('data-bandlab-track');
if (!id) return;
const iframe = document.createElement('iframe');
iframe.title = 'BandLab Track Player';
iframe.loading = 'lazy';
iframe.width = '100%';
iframe.height = '202';
iframe.frameBorder = '0';
iframe.allowFullscreen = true;
/* why: BandLab official pattern from public embeds */
iframe.src = `https://www.bandlab.com/embed/?id=${encodeURIComponent(id)}&blur=false`;
iframe.style.borderRadius = '12px';
el.replaceWith(iframe);
});
})();
