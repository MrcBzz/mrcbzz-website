# Complete Website Deployment Guide - From Zero to Live

Budget: $20/year (you'll spend about $10-12)

## Overview: What We're Building

You'll learn to:
1. Set up your own development environment
2. Version control with Git/GitHub
3. Build and deploy a React website
4. Configure a custom domain
5. Set up HTTPS/SSL certificates

**The Hard Way (Learning Path):** We'll use Vercel CLI + GitHub, so you understand the full workflow.

---

## Part 1: Initial Setup (30 minutes)

### Step 1: Install Required Tools

**Install Node.js:**
1. Go to https://nodejs.org/
2. Download the LTS version (Long Term Support)
3. Run the installer, click through all defaults
4. Verify installation:
   - Open Terminal (Mac) or Command Prompt (Windows)
   - Type: `node --version` (should show v20.x.x or similar)
   - Type: `npm --version` (should show 10.x.x or similar)

**Install Git:**
1. Windows: Download from https://git-scm.com/download/win
2. Mac: Open Terminal, type `git --version` (Mac will prompt you to install if needed)
3. Linux: `sudo apt-get install git` (Ubuntu/Debian)
4. Verify: Type `git --version` in terminal

**Install VS Code (Code Editor):**
1. Download from https://code.visualstudio.com/
2. Install it
3. Open VS Code

---

## Part 2: Create Your Project (20 minutes)

### Step 2: Set Up Project Structure

**Create project folder:**
```bash
# Open terminal/command prompt
# Navigate to where you want your project (e.g., Desktop)
cd Desktop

# Create project folder
mkdir mrcbzz-website
cd mrcbzz-website
```

**Initialize React project with Vite:**
```bash
npm create vite@latest . -- --template react

# When prompted:
# - Type 'y' to proceed
# - Select 'React' framework
# - Select 'JavaScript' variant

# Install dependencies
npm install

# Install Lucide icons (used in your site)
npm install lucide-react
```

### Step 3: Add Your Website Code

1. Open VS Code
2. File → Open Folder → Select `mrcbzz-website`
3. In the left sidebar, find `src/App.jsx`
4. Delete everything in `App.jsx`
5. Copy the ENTIRE React code I created for you (from the artifact above)
6. Paste it into `App.jsx`
7. Save the file (Ctrl+S or Cmd+S)

### Step 4: Clean Up Default Styles

1. Open `src/index.css`
2. Delete everything
3. Add only this:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
4. Save

### Step 5: Install Tailwind CSS

```bash
# In terminal, make sure you're in your project folder
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Configure Tailwind:**
1. Open `tailwind.config.js`
2. Replace its contents with:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
3. Save

### Step 6: Test Locally

```bash
npm run dev
```

- Open browser to `http://localhost:5173`
- You should see your website!
- Press Ctrl+C in terminal to stop the server

---

## Part 3: Git & GitHub (30 minutes)

### Step 7: Configure Git (First Time Only)

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Step 8: Create GitHub Account

1. Go to https://github.com
2. Click "Sign up"
3. Create account (free)
4. Verify your email

### Step 9: Create Repository on GitHub

1. Click the "+" in top right → "New repository"
2. Repository name: `mrcbzz-website`
3. Description: "My personal portfolio"
4. Keep it PUBLIC (free)
5. Do NOT check "Add a README" (we already have files)
6. Click "Create repository"
7. **KEEP THIS PAGE OPEN** - you'll need the commands shown

### Step 10: Push Your Code to GitHub

**In your terminal (in project folder):**

```bash
# Initialize git in your project
git init

# Add all files to git
git add .

# Create first commit
git commit -m "Initial commit - portfolio website"

# Connect to GitHub (replace URL with YOUR repository URL from GitHub page)
git remote add origin https://github.com/YOUR_USERNAME/mrcbzz-website.git

# Push code to GitHub
git branch -M main
git push -u origin main
```

**If prompted for GitHub credentials:**
- Username: your GitHub username
- Password: You need a Personal Access Token (not your password)
  - Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
  - Generate new token → Select "repo" scope → Generate
  - Copy the token and paste it as password

**Verify:** Refresh your GitHub repository page - you should see all your files!

---

## Part 4: Deploy to Vercel (20 minutes)

### Step 11: Create Vercel Account

1. Go to https://vercel.com
2. Click "Sign Up"
3. Click "Continue with GitHub"
4. Authorize Vercel to access your GitHub

### Step 12: Import Your Project

1. Click "Add New..." → "Project"
2. Find your `mrcbzz-website` repository
3. Click "Import"
4. **Configure Project:**
   - Framework Preset: Vite
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (should be auto-detected)
   - Output Directory: `dist` (should be auto-detected)
5. Click "Deploy"
6. Wait 1-2 minutes for deployment
7. You'll get a URL like: `mrcbzz-website.vercel.app`

**Test it:** Click the URL - your site is LIVE!

---

## Part 5: Custom Domain (30 minutes)

### Step 13: Buy Your Domain

**Option A: Cloudflare (Cheapest - $10/year for .com)**
1. Go to https://www.cloudflare.com/
2. Sign up for free account
3. Click "Domain Registration"
4. Search for `mrcbzz.com` (or .io, .me, etc.)
5. Add to cart, checkout (~$10-12)
6. Complete purchase

**Option B: Namecheap (~$12/year for .com)**
1. Go to https://www.namecheap.com
2. Search for `mrcbzz.com`
3. Add to cart, create account, checkout

### Step 14: Connect Domain to Vercel

**In Vercel:**
1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Enter your domain (e.g., `mrcbzz.com`)
4. Click "Add"
5. Vercel will show you DNS records to add

**You'll see something like:**
- Type: `A` | Name: `@` | Value: `76.76.21.21`
- Type: `CNAME` | Name: `www` | Value: `cname.vercel-dns.com`

### Step 15: Configure DNS

**If using Cloudflare:**
1. Go to Cloudflare dashboard
2. Click your domain → DNS → Records
3. Click "Add record"
4. Add the A record:
   - Type: A
   - Name: @
   - IPv4 address: (the IP Vercel gave you)
   - Proxy status: DNS only (gray cloud)
   - TTL: Auto
5. Click "Save"
6. Add CNAME record:
   - Type: CNAME
   - Name: www
   - Target: (the CNAME Vercel gave you)
   - Proxy status: DNS only
7. Click "Save"

**If using Namecheap:**
1. Go to Namecheap dashboard
2. Click "Manage" next to your domain
3. Advanced DNS tab
4. Delete any existing A or CNAME records for @ and www
5. Add new records with values from Vercel
6. Save

### Step 16: Enable SSL (HTTPS)

**In Vercel (automatic):**
1. Wait 5-10 minutes after DNS configuration
2. Vercel automatically provisions SSL certificate
3. Your site will be available at https://mrcbzz.com

**If using Cloudflare:**
1. Go to SSL/TLS → Overview
2. Select "Full" or "Full (strict)"
3. Turn on "Always Use HTTPS"

---

## Part 6: Future Updates (How to Update Your Site)

### When You Want to Change Your Website:

1. Open project in VS Code
2. Make changes to `src/App.jsx`
3. Test locally: `npm run dev`
4. When happy with changes:

```bash
git add .
git commit -m "Description of what you changed"
git push
```

5. Vercel automatically detects the push and redeploys (takes 1-2 minutes)
6. Your live site updates automatically!

---

## Part 7: Adding Your First Project

### How to Add Content:

1. Open `src/App.jsx` in VS Code
2. Find the `projects` array (around line 8)
3. Add your project:

```javascript
const projects = [
  {
    id: 1,
    title: 'Building My Personal Website',
    tags: ['web', 'personal', 'writing'],
    description: 'The journey of creating this space. From deciding I needed a home for my work to actually building it with Claude.',
    images: [
      'https://your-image-host.com/image1.jpg',
      'https://your-image-host.com/image2.jpg',
      'https://your-image-host.com/image3.jpg'
    ]
  },
  // Add more projects here
];
```

### For Images, You Have Options:

**Option 1: Use Image Hosting (Easiest)**
- Imgur: Upload images, get direct links
- Cloudinary: Free tier, 25GB storage
- ImgBB: Simple, free

**Option 2: GitHub (Free, Learning)**
1. Create `public` folder in your project
2. Create `images` folder inside it
3. Put your images there
4. Reference them as: `'/images/photo1.jpg'`
5. Commit and push to GitHub

**Option 3: Cloudflare R2 (Advanced, Cheap)**
- $0.015/GB storage (basically free for images)
- Learn object storage concepts

---

## Troubleshooting

### Site Not Loading After DNS Changes
- **Wait:** DNS can take 1-48 hours to propagate (usually 10-30 minutes)
- **Check:** Use https://dnschecker.org to see if DNS has propagated globally
- **Clear cache:** Try incognito/private browsing

### Build Fails on Vercel
- Check build logs in Vercel dashboard
- Usually means missing dependency: run `npm install` locally
- Make sure all changes are committed and pushed to GitHub

### Images Not Showing
- Check image URLs are correct and publicly accessible
- Make sure images are in `public` folder if using local images
- Check browser console (F12) for error messages

### Git Push Asks for Password
- Use Personal Access Token, not your GitHub password
- Save credentials: `git config --global credential.helper store`

---

## Cost Breakdown

- Domain: $10-12/year
- Vercel hosting: FREE (up to 100GB bandwidth/month)
- GitHub: FREE
- SSL Certificate: FREE (auto via Vercel)
- Image hosting: FREE (Imgur/GitHub) or ~$0-1/year (R2)

**Total: ~$10-12/year**

---

## What You've Learned

✅ Node.js and npm package management
✅ React and modern web development
✅ Git version control
✅ GitHub for code hosting
✅ Continuous deployment with Vercel
✅ DNS configuration
✅ Domain management
✅ SSL/HTTPS security

You now have a production-grade deployment pipeline. Every time you push code to GitHub, your website automatically updates. This is how professional developers work.

---

## Next Steps

1. Add your real projects
2. Replace placeholder images with real ones
3. Write about building this site as your first project
4. Share your website on X!

**Your live site:** https://mrcbzz.com (once DNS propagates)

If you get stuck on any step, the error messages usually tell you what's wrong. Read them carefully. Google the error if needed. This is how developers learn.

Welcome to web development! 🚀



# DETAILED PARTS OF THE GUIDE
## GitHub Needs Authentication

When you git push, you're sending code to your GitHub account. GitHub needs to verify it's really you, not someone else trying to mess with your code.

**Token Access is your password**

git push -u origin main

A window might pop up asking for credentials:

### If Using Windows (Credential Manager):

You might see a popup window:
- **Username:** Type your GitHub username (e.g., "mrcbzz")
- **Password:** Paste the token (the long `ghp_xxx` string)
- Check "Remember me" if you want
- Click OK

### If Using Command Line Prompt:
```
Username for 'https://github.com': mrcbzz
Password for 'https://mrcbzz@github.com': [paste token here]


**Saving credentials**
git config --global credential.helper store

# Let's customize your site's tab appearance:

Change the Tab Title and Icon (Favicon)
Step 1: Change the Tab Title

Open your project in VS Code
Open the file index.html (it's in the root folder, not in src)
Find this line (around line 7):

html   <title>Vite + React</title>

Change it to:

html   <title>Marc - Writer & Creator</title>

Save the file

Step 2: Change the Icon (Favicon)
The little icon is called a "favicon". Here's how to change it:
Option A: Use an Emoji (Easiest)

Still in index.html, find this line:

html   <link rel="icon" type="image/svg+xml" href="/vite.svg" />

Replace it with:

html   <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✍️</text></svg>">

You can change ✍️ to any emoji you want:

📝 (memo)
✨ (sparkles)
🚀 (rocket)
M (just the letter M)



Option B: Use a Custom Image

Create or find a small square image (PNG or ICO)

Size: 32x32 or 64x64 pixels
Save it as favicon.png or favicon.ico


Put it in your public folder (create this folder if it doesn't exist)
In index.html, change the line to:

html   <link rel="icon" type="image/png" href="/favicon.png" />
Step 3: Test Locally
bashnpm run dev
Go to http://localhost:5173 and check the tab - you should see your new title and icon!
Step 4: Deploy the Changes
bashgit add .
git commit -m "Update site title and favicon"
git push
Vercel will automatically detect the push and redeploy (takes 1-2 minutes).

Quick Example with Emoji:
Your index.html should look like:
html<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✍️</text></svg>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Marc - Writer & Creator</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

# What the public Folder Is For:
The public folder is for static files that don't change:

✅ Favicon/icons
✅ Project images
✅ PDFs, documents
✅ Any files you want to reference directly by URL

Everything in public gets copied to your website root when you build.

How to Use It:
For Your Favicon:

Put your favicon image in public folder

Example: public/favicon.png


In index.html, reference it:

html   <link rel="icon" type="image/png" href="/favicon.png" />
```

### For Project Images:

**Organize them nicely:**
```
public/
├── vite.svg
├── favicon.png
└── projects/
    ├── website-building/
    │   ├── image1.jpg
    │   ├── image2.jpg
    │   └── image3.jpg
    └── another-project/
        ├── photo1.jpg
        └── photo2.jpg
Then in your code (src/App.jsx):
javascriptconst projects = [
  {
    id: 1,
    title: 'Building My Personal Website',
    tags: ['web', 'personal', 'writing'],
    description: 'The journey of creating this space.',
    images: [
      '/projects/website-building/image1.jpg',
      '/projects/website-building/image2.jpg',
      '/projects/website-building/image3.jpg'
    ]
  },
];
```

**Note the `/` at the start** - this means "start from the root of the website" (which is the `public` folder).

---

## Complete Example:

### Step 1: Organize Your Files

Create this structure:
```
mrcbzz-website/
├── public/
│   ├── favicon.png              ← Your site icon
│   └── projects/
│       └── website/
│           ├── screenshot1.jpg
│           ├── screenshot2.jpg
│           └── screenshot3.jpg
├── src/
│   └── App.jsx
Step 2: Update Your Code
In src/App.jsx, find the projects array and update it:
javascriptconst projects = [
  {
    id: 1,
    title: 'Building My Personal Website',
    tags: ['web', 'personal', 'writing'],
    description: 'The journey of creating this space. From deciding I needed a home for my work to actually building it.',
    images: [
      '/projects/website/screenshot1.jpg',
      '/projects/website/screenshot2.jpg',
      '/projects/website/screenshot3.jpg'
    ]
  },
];
Step 3: Push to GitHub
bashgit add .
git commit -m "Add project images"
git push
Vercel will automatically include everything in public when it deploys!

# Common Files Developers Add:
mrcbzz-website/
├── README.md              ← Project description (GitHub shows this)
├── DEPLOYMENT-GUIDE.md    ← Your deployment steps
├── NOTES.md               ← Personal notes
├── TODO.md                ← Things to do
├── public/
├── src/
└── package.json
All these .md files are ignored by the build process. They're just documentation.


