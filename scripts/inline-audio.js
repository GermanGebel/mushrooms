// Готовит build/index.html к шифрованию: встраивает трек (src/assets/music.mp3)
// прямо в страницу как data:URI (base64), чтобы музыка была ПОД ТОКЕНОМ и не лежала
// отдельным файлом в открытом доступе. Если mp3 нет — оставляет ссылку assets/music.mp3.
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const SRC = path.join(root, 'src', 'index.html');
const OUT = path.join(root, 'build', 'index.html');
const MP3 = path.join(root, 'src', 'assets', 'music.mp3');

let html = fs.readFileSync(SRC, 'utf8');

if (fs.existsSync(MP3)) {
  const b64 = fs.readFileSync(MP3).toString('base64');
  const dataUri = 'data:audio/mpeg;base64,' + b64;
  if (html.includes('assets/music.mp3')) {
    html = html.replace('assets/music.mp3', dataUri);
    console.log('inline-audio: трек встроен,', (b64.length / 1024 / 1024).toFixed(2), 'МБ base64');
  } else {
    console.log('inline-audio: ссылка assets/music.mp3 не найдена в HTML — пропускаю');
  }
} else {
  console.log('inline-audio: src/assets/music.mp3 не найден — оставляю ссылку как есть');
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, html);
console.log('inline-audio: записан build/index.html');
