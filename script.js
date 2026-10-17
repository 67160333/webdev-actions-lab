// ปุ่ม Say Hello (จากโจทย์ต้นแบบ)
const statusEl = document.querySelector('#status');
document.querySelector('#helloBtn').addEventListener('click', () => {
  statusEl.textContent = 'Hello from GitHub Pages!';
});

// Exercise 3: ปุ่มเปลี่ยนข้อความแบบวนรอบ
const messages = [
  'ยินดีที่ได้รู้จัก 👋',
  'เว็บนี้ Deploy อัตโนมัติทุกครั้งที่ push ไปที่ main',
  'Git → GitHub → Actions → Pages',
  'Ready to deploy'
];
let msgIndex = 0;
document.querySelector('#msgBtn').addEventListener('click', () => {
  statusEl.textContent = messages[msgIndex];
  msgIndex = (msgIndex + 1) % messages.length;
});

// Exercise 3: Toggle Theme (จำค่าที่เลือกไว้ใน localStorage)
const themeBtn = document.querySelector('#themeBtn');
function applyTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark');
  themeBtn.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
}
let theme = 'light';
try { theme = localStorage.getItem('theme') || 'light'; } catch (e) {}
applyTheme(theme);
themeBtn.addEventListener('click', () => {
  theme = theme === 'dark' ? 'light' : 'dark';
  applyTheme(theme);
  try { localStorage.setItem('theme', theme); } catch (e) {}
});
