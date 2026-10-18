(function () {
  'use strict';
  var TARGET = Date.UTC(2026, 9, 19, 10, 0, 0); // 19 Oct 2026, 10:00 UTC
  var q = new URLSearchParams(location.search).get('preview');
  if (q === 'live') TARGET = 0; // local preview of the "Live now" state
  var el = { d: 'd', h: 'h', m: 'm', s: 's' }, k;
  for (k in el) el[k] = document.getElementById(el[k]);
  var timer = document.getElementById('timer'), live = document.getElementById('live');
  function pad(n) { return n < 10 ? '0' + n : String(n); }
  var id;
  function tick() {
    var left = Math.max(0, Math.floor((TARGET - Date.now()) / 1000));
    if (left === 0) { timer.hidden = true; live.hidden = false; if (id) clearInterval(id); return; }
    el.d.textContent = pad(Math.floor(left / 86400));
    el.h.textContent = pad(Math.floor(left % 86400 / 3600));
    el.m.textContent = pad(Math.floor(left % 3600 / 60));
    el.s.textContent = pad(left % 60);
  }
  tick(); id = setInterval(tick, 1000);
})();
