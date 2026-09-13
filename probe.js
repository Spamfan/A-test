import { probeStatus } from './helper.js';

const el = document.getElementById('status-text');
el.textContent = probeStatus;
el.style.color = '#166534';