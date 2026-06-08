window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// TV 遥控器焦点适配
document.addEventListener('keydown', (e) => {
  const focusable = document.querySelectorAll(
    'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const current = document.activeElement;
  let index = Array.from(focusable).indexOf(current);

  switch(e.key) {
    case 'ArrowUp': index--; break;
    case 'ArrowDown': index++; break;
    case 'Enter':
    case ' ':
      if (current) current.click();
      e.preventDefault();
      return;
    default: return;
  }

  if (index < 0) index = focusable.length - 1;
  if (index >= focusable.length) index = 0;
  focusable[index]?.focus();
  e.preventDefault();
});

// 焦点高亮边框
const style = document.createElement('style');
style.textContent = `
  *:focus {
    outline: 3px solid #00aaff !important;
    outline-offset: 2px !important;
  }
`;
document.head.appendChild(style);