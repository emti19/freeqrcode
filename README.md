# Free QR Code Generator 🚀

A beautiful, modern QR code generator with a clean interface. Create and download QR codes instantly!

## ✨ Features

- **Beautiful Modern Design** - Glassmorphism UI with smooth animations
- **Instant Generation** - Client-side QR code generation (no server required)
- **Responsive Design** - Works perfectly on all devices
- **One-Click Download** - Download QR codes as PNG files
- **No Dependencies** - Runs entirely in the browser
- **Fast & Secure** - No data sent to servers

## 🌐 Live Demo

Visit: [https://freeqrcode.pages.dev](https://freeqrcode.pages.dev) *(Replace with your actual Cloudflare Pages URL)*

## 🚀 Deploy to Cloudflare Pages

### Method 1: Direct from GitHub (Recommended)

1. **Push to GitHub** (Already done! ✅)
   ```bash
   git add .
   git commit -m "Add static version for Cloudflare Pages"
   git push origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to **Pages**
   - Click **"Create a project"**
   - Select **"Connect to Git"**
   - Choose your GitHub repository: `emti19/freeqrcode`

3. **Configure Build Settings**
   - **Build command**: Leave empty (static site)
   - **Build output directory**: `/` (root directory)
   - **Root directory**: `/` (root directory)

4. **Deploy**
   - Click **"Save and Deploy"**
   - Your site will be available at: `https://freeqrcode.pages.dev`

### Method 2: Manual Upload

1. **Prepare files for upload**
   - Upload `index.html` as the main file
   - Include `_redirects` file for routing

2. **Upload to Cloudflare Pages**
   - Go to Cloudflare Pages
   - Click **"Upload assets"**
   - Drag and drop your files

## 📁 Project Structure

```
├── index.html          # Main static QR generator page
├── index.js            # Original Node.js server (for local development)
├── views/
│   └── index.ejs       # Original EJS template
├── package.json        # Node.js dependencies
├── _redirects          # Cloudflare Pages routing
└── README.md           # This file
```

## 🛠️ Local Development

### Static Version (Cloudflare-ready)
Simply open `index.html` in your browser!

### Node.js Version (Original)
```bash
npm install
node index.js
# Visit http://localhost:3000
```

## 🎨 Customization

The static version (`index.html`) includes:
- **Modern CSS** with custom properties
- **QR.js library** for client-side generation
- **Bootstrap 5** for responsive design
- **Font Awesome** icons
- **Inter font** for typography

## 📱 Browser Support

- Chrome/Edge 60+
- Firefox 55+
- Safari 12+
- Mobile browsers

## 🔒 Privacy

- **100% Client-side** - No data leaves your browser
- **No tracking** - No analytics or cookies
- **Secure** - HTTPS by default on Cloudflare Pages

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ by [emti19](https://github.com/emti19)
