import '../css/style.css';
import { setupCounter } from './counter.js';
import { initEditor } from './editor.js';
import { initPDFGenerator } from './pdfGenerator.js';
import { initRippleEffect } from './rippleEffect.js';

document.querySelector('#app').innerHTML = `
  <div class="cv">
    <!-- HTML структура резюме -->
    <button class="download-btn ripple" id="counter">Скачать PDF</button>
  </div>
`;

// Инициализация компонентов
setupCounter(document.querySelector('#counter'));
initEditor();
initPDFGenerator();
initRippleEffect();