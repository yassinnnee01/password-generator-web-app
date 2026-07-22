# 🛡️ CyberGuard Pro+ — Premium Password Generator & Encrypted Vault

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PWA Ready](https://img.shields.io/badge/PWA-100%25_Offline-emerald.svg)](manifest.json)
[![Encryption](https://img.shields.io/badge/Crypto-AES--GCM_256--bit-indigo.svg)](script.js)
[![Zero Knowledge](https://img.shields.io/badge/Security-Zero--Knowledge-brightgreen.svg)](#security-features)

**CyberGuard Pro+** is a commercial-grade, client-side cybersecurity web application designed for generating cryptographically secure high-entropy passwords, performing offline password health audits, and storing login credentials locally inside an **AES-GCM 256-bit Web Crypto Encrypted Vault**.

100% of data processing and cryptography occurs inside your local browser instance. Zero data ever leaves your device.

---

## 🌟 Features

### 🔐 Password & Key Generators
- **Standard Generator**: Customizable length (8–36 chars), strict rule toggles (uppercase, lowercase, numbers, symbols, avoid ambiguous, no repeated consecutive, start with letter, exclude similar symbols).
- **Sentence-to-Passphrase**: Converts memorable phrases into high-security passphrases.
- **Phonetic Pronounceable Generator**: Creates easy-to-remember pronounceable passwords.
- **Cyber Handle Generator**: Generates random tech and cyber handles.
- **PIN Generator**: Cryptographic multi-digit PIN generator.
- **Wi-Fi Passphrase**: WPA2/WPA3 password generator.

### 🛡️ Password Health Audit & Leak Checker
- **Entropy Calculation**: Computes real-time entropy in bits ($E = L \times \log_2(R)$).
- **Offline Breach Detection**: Checks passwords against an embedded dictionary of 200+ common weak and leaked keys without sending network requests.
- **Estimated Crack Time**: Calculates brute-force resistance across modern GPU clusters.

### 📦 Web Crypto Encrypted Vault
- **AES-GCM 256-bit Local Encryption**: Uses native `window.crypto.subtle` APIs.
- **PBKDF2 Key Derivation**: Derives AES key using SHA-256 with 100,000 iterations from a Master Password.
- **Category Filter & Search**: Filter vault items by Email, Banking, Social, Server, Crypto Wallet, Wi-Fi, or custom search queries.
- **Favorites**: Toggle favorite credentials for quick access.
- **Auto-Lock**: Master key auto-clears from memory on locking.

### 📊 Security Dashboard & Audit Tracker
- **Security Score Index**: Overall score computed from vault items strength.
- **Password Reuse Detection**: Alerts users to duplicate passwords reused across services.
- **Expiration Tracker**: Identifies credentials older than 90 days requiring updates.

### 💾 Backup & Data Control
- **Encrypted Backup Export/Import**: Export and restore vault items via JSON backups.
- **Clear Data**: Single-click local storage purge for full user privacy.

### 🌐 Progressive Web App (PWA) & Offline Mode
- Fully offline-ready with Service Worker (`sw.js`) asset caching.
- Installable on desktop and mobile devices.
- Custom fallback offline view (`assets/offline.html`).

### 🎨 Customization & Accessibility
- **Themes**: Dark Mode, Light Mode, and Cyberpunk theme.
- **Multi-Language (i18n)**: English (US), French (Français), Arabic (العربية with full RTL support).
- **Keyboard Shortcuts**: `Space`/`Enter` (Generate), `Ctrl+C` (Copy), `Esc` (Close Modals).
- **Responsive & Accessible**: Smooth collapsible sidebar on desktop and slide-in navigation drawer on mobile.

---

## 🔒 Security Features

1. **Zero-Knowledge Architecture**: No remote server, no tracking script, no analytics.
2. **Web Crypto API**: Built with standard browser `window.crypto.getRandomValues()` and `window.crypto.subtle`.
3. **PBKDF2 Key Derivation**: Master passwords are key-stretched using 100,000 iterations of SHA-256.
4. **AES-GCM 256-bit**: Encrypted vault storage with unique Initialization Vectors (IV) per record.

---

## 🛠️ Technology Stack

- **Core Engine**: HTML5, Vanilla JavaScript (ES6+ Class Modules)
- **Styling**: Modern CSS3 (Variables, Flexbox, CSS Grid, Glassmorphism, Transitions)
- **Cryptography**: Web Crypto API (`CryptoKey`, `subtle.importKey`, `subtle.deriveKey`, `subtle.encrypt`, `subtle.decrypt`)
- **PWA**: Service Worker API, Cache Storage API, Web App Manifest

---

## 📁 Folder Structure

```
password-generator-web-app/
├── index.html                  # Main application shell & tab layout
├── style.css                   # Glassmorphism design system & responsive layout
├── script.js                   # Application logic, WebCrypto vault, generators, i18n
├── manifest.json               # Progressive Web App manifest metadata
├── sw.js                       # Service Worker for offline asset caching
├── generate_icons.py           # Utility script for PWA PNG icon generation
├── README.md                   # Project documentation
├── icons/
│   ├── favicon.svg             # Vector shield branding logo
│   ├── icon-192.png            # PWA 192x192 icon
│   ├── icon-512.png            # PWA 512x512 icon
│   └── apple-touch-icon.png    # iOS Touch icon
└── assets/
    └── offline.html            # Standalone offline page
```

---

## 🚀 Local Installation & Usage

No build tools or `npm install` steps are required!

### Option 1: Direct File Opening
Simply open `index.html` in any modern web browser (Chrome, Edge, Firefox, Safari, Brave).

### Option 2: Local HTTP Server

**Using Python:**
```bash
# Navigate to the project directory
cd password-generator-web-app

# Start HTTP server on port 8080
python -m http.server 8080
```
Open **`http://localhost:8080`** in your browser.

**Using Node.js `npx`:**
```bash
npx http-server -p 8080
```

---

## 🌐 GitHub Pages Deployment

To host CyberGuard Pro+ free on GitHub Pages:

1. Push this repository to GitHub.
2. Navigate to your repository **Settings** tab on GitHub.
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment** > **Branch**, select `main` (or `master`) branch and `/ (root)` folder.
5. Click **Save**.
6. Your live PWA URL will be published at `https://<your-username>.github.io/<repository-name>/`.

---

## ⌨️ Keyboard Shortcuts Reference

| Shortcut | Action |
|---|---|
| `Space` / `Enter` | Generate new password (when Generator tab is focused) |
| `Ctrl + C` / `Cmd + C` | Copy current generated password |
| `Esc` | Close open modals or overlays |

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).

---

## 🤝 Credits & Acknowledgments

Designed & developed with modern client-side security standards. Built with standard browser Web Crypto APIs for maximum privacy and zero-server dependency.
