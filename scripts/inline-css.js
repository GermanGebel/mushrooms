// Вшивает собранный Tailwind (build/tw.css) прямо в src/index.html между маркерами TW:START/TW:END.
// Запускается из npm run build:css после компиляции Tailwind CLI.
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const HTML = path.join(root, 'src', 'index.html');
const CSSFILE = path.join(root, 'build', 'tw.css');

const css = fs.readFileSync(CSSFILE, 'utf8').trim();
let html = fs.readFileSync(HTML, 'utf8');

const block =
  '  <!-- TW:START (сгенерировано Tailwind CLI: npm run build:css — вручную не редактировать) -->\n' +
  '  <style>' + css + '</style>\n' +
  '  <!-- TW:END -->\n';

if (html.includes('<!-- TW:START')) {
  html = html.replace(/[ \t]*<!-- TW:START[\s\S]*?<!-- TW:END -->\n/, block);
} else {
  // первый запуск: вставляем после подключения шрифтов
  html = html.replace(/(<link href="https:\/\/fonts\.googleapis\.com[^\n]*\/>\n)/, '$1\n' + block);
}

fs.writeFileSync(HTML, html);
console.log('inline-css: вшито', css.length, 'символов CSS в src/index.html');
