// Копирует src/assets/* -> docs/assets/* для «лёгкого» режима сборки,
// где трек отдаётся отдельным файлом с ленивой загрузкой (страница открывается мгновенно).
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const from = path.join(root, 'src', 'assets');
const to = path.join(root, 'docs', 'assets');

if (fs.existsSync(from)) {
  fs.mkdirSync(to, { recursive: true });
  const files = fs.readdirSync(from);
  for (const f of files) fs.copyFileSync(path.join(from, f), path.join(to, f));
  console.log('copy-assets: в docs/assets скопировано:', files.join(', ') || '(пусто)');
} else {
  console.log('copy-assets: src/assets отсутствует — пропускаю');
}
