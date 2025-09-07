# The Brijwasi Foundation 🌿

Official website of **The Brijwasi Foundation** — a nonprofit organization committed to social good through education, healthcare, community service, and cultural initiatives.

🔗 **Live Site:** [thebrijwasifoundation.in](https://thebrijwasifoundation.in)  
💻 **Source Code:** [mesonicDEVAJ18/TBF_Website_2.0](https://github.com/mesonicDEVAJ18/TBF_Website_2.0)

## 📌 Overview

This is the official **React + Vite** website of the Brijwasi Foundation. It showcases our vision, mission, events, and provides ways for people to connect or contribute.

The site is:
- ⚡ **Fast & optimized** with React + Vite
- 🌐 **SEO-ready** (meta tags, sitemap, robots.txt) for search visibility
- 📬 **Powered by EmailJS** for serverless contact form functionality
- ☁️ **Deployed on Netlify** using the `dist/` production build (manual upload, not CI/CD)

## ✨ Features

- **Responsive UI** – Mobile-first, modern, and accessible
- **SEO Optimized** – Titles, meta descriptions, sitemap, and keywords
- **About / Vision / Mission** – Learn about the foundation's purpose
- **Events & Albums** – Showcasing initiatives and yearly photo collections
- **Donate Page** – Contribution options for supporters
- **Contact Form with EmailJS** – Send messages without a backend
- **Netlify Deployment** – Hosted via manual build upload (`dist/`)

## 🛠️ Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS (custom components & utilities)
- **SEO:** React Helmet + sitemap + robots.txt
- **Forms:** EmailJS integration (serverless emails)
- **Hosting & Deployment:** Netlify (manual deploy with `dist/`)
- **Domain:** thebrijwasifoundation.in

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/mesonicDEVAJ18/TBF_Website_2.0.git
cd TBF_Website_2.0
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

Visit **http://localhost:5173** in your browser.

### 4. Build for production

```bash
npm run build
```

The output will be in the `dist/` folder.

### 5. Deploy on Netlify (Manual Upload)

1. Run `npm run build` locally
2. Go to [Netlify App](https://app.netlify.com)
3. Drag and drop the `dist/` folder into the deploy area
4. Netlify will host your site instantly

## 🌐 SEO & Sitemap

The site includes:
- **SEO meta tags** for all major pages
- **robots.txt** for search engine crawling
- **sitemap.xml** with prioritized URLs:
  - `/` (home)
  - `/about`
  - `/donate`
  - `/volunteer`
  - `/contact`
  - `/credits`
  - `/album` and yearly albums (`/2023`, `/2024`, `/2025`)

## ✉️ EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com)
2. Create a new **service** and **email template**
3. Add your **public key** in the contact form component
4. Update `service_id`, `template_id`, and `public_key` in the form code

## 🤝 Contributing

We welcome contributions!

1. Fork the repo
2. Create a new branch (`feature/your-feature`)
3. Commit changes
4. Submit a Pull Request

## 📄 License

This project is licensed under the Apache 2.0 - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For questions or support, please visit our [contact page](https://thebrijwasifoundation.in/contact) or reach out to us directly.

---

**Made with ❤️ by The Brijwasi Foundation Team**
