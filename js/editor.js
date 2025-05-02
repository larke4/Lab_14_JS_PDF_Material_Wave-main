export function initEditor() {
    document.querySelectorAll('[contenteditable="true"]').forEach(element => {
      const savedValue = localStorage.getItem(`resume-${element.classList}`);
      if (savedValue) {
        element.innerHTML = savedValue;
      }
      
      element.addEventListener('input', () => {
        localStorage.setItem(`resume-${element.classList}`, element.innerHTML);
      });
    });
  }