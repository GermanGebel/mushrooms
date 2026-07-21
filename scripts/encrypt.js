// Шифрует переданный HTML в docs/ через StatiCrypt с локализованным (русским)
// и стилизованным под вечеринку экраном ввода токена.
// Пароль берётся из переменной окружения STATICRYPT_PASSWORD.
// Использование: node scripts/encrypt.js <input.html>
const { execFileSync } = require('child_process');
const path = require('path');

const input = process.argv[2] || 'src/index.html';
const bin = path.resolve(__dirname, '..', 'node_modules', '.bin', 'staticrypt');

const args = [
  input,
  '-d', 'docs',
  '--short',
  '--remember', '30',
  '--template-title', 'Грибной ДР Германа 🍄',
  '--template-instructions', 'Секретное приглашение. Введи токен из сообщения — и добро пожаловать в отряд 🧺',
  '--template-placeholder', 'токен',
  '--template-button', 'В ЛЕС 🍄',
  '--template-error', 'Неверный токен. Попробуй ещё раз.',
  '--template-remember', 'запомнить меня на этом устройстве',
  '--template-color-primary', '#E8442B',
  '--template-color-secondary', '#F4ECD8',
];

execFileSync(bin, args, { stdio: 'inherit', env: process.env });
