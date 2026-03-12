// ── HARDCODED CREDENTIALS ──
const users = [
  { username: 'customer',  password: 'customer123',  role: 'customer' },
  { username: 'cashier',   password: 'cashier123',   role: 'cashier'  },
  { username: 'admin',     password: 'admin123',     role: 'admin'    }
];

// ── OPEN / CLOSE PANELS ──
function openLogin() {
  document.getElementById('loginPanel').style.display = 'flex';
}
function closeLogin() {
  document.getElementById('loginPanel').style.display = 'none';
  clearLoginForm();
}
function openRegister() {
  document.getElementById('registerPanel').style.display = 'flex';
}
function closeRegister() {
  document.getElementById('registerPanel').style.display = 'none';
  clearRegisterForm();
}
function switchToRegister() {
  closeLogin();
  openRegister();
}
function switchToLogin() {
  closeRegister();
  openLogin();
}

// ── CLEAR FORMS ──
function clearLoginForm() {
  document.getElementById('login-username').value = '';
  document.getElementById('login-password').value = '';
  document.getElementById('login-error').style.display = 'none';
}
function clearRegisterForm() {
  document.getElementById('reg-username').value = '';
  document.getElementById('reg-password').value = '';
  document.getElementById('register-error').style.display = 'none';
  document.getElementById('register-success').style.display = 'none';
}

// ── HANDLE LOGIN ──
function handleLogin() {
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value.trim();
  const errorEl  = document.getElementById('login-error');

  errorEl.style.display = 'none';

  if (!username || !password) {
    errorEl.textContent = 'Please enter both username and password.';
    errorEl.style.display = 'block';
    return;
  }

  const match = users.find(u => u.username === username && u.password === password);

  if (!match) {
    errorEl.textContent = 'Invalid username or password.';
    errorEl.style.display = 'block';
    return;
  }

  if (match.role === 'admin') {
    window.location.href = 'admin.html';
  } else if (match.role === 'cashier') {
    window.location.href = 'cashier.html';
  } else {
    window.location.href = 'menu.html';
  }
}

// ── HANDLE REGISTER ──
function handleRegister() {
  const username  = document.getElementById('reg-username').value.trim();
  const password  = document.getElementById('reg-password').value.trim();
  const errorEl   = document.getElementById('register-error');
  const successEl = document.getElementById('register-success');

  errorEl.style.display   = 'none';
  successEl.style.display = 'none';

  if (!username || !password) {
    errorEl.textContent = 'Please fill in all fields.';
    errorEl.style.display = 'block';
    return;
  }

  if (password.length < 6) {
    errorEl.textContent = 'Password must be at least 6 characters.';
    errorEl.style.display = 'block';
    return;
  }

  successEl.textContent = '✅ Account created! You can now log in.';
  successEl.style.display = 'block';

  setTimeout(() => switchToLogin(), 1500);
}
