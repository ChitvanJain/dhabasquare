# GitHub Pages + Hostinger DNS Setup Guide
## Host on GitHub, Domain DNS on Hostinger

This is a powerful combination:
- **GitHub Pages** = Free, reliable hosting with automatic deployments
- **Hostinger DNS** = Domain management remains with Hostinger

---

## 📋 Prerequisites

✅ GitHub account (free)  
✅ Hostinger account with dhabasquare.com domain  
✅ All website files ready locally  

---

## 🚀 STEP 1: Create GitHub Repository

### 1.1 Go to GitHub
1. Login to https://github.com (create account if needed)
2. Click **+** icon (top right) → **New repository**

### 1.2 Create Repository
```
Repository name: dhabasquare
Description: Dhaba Square Restaurant Website
Visibility: Public (required for free GitHub Pages)
Initialize with: Add a README file
```
3. Click **Create repository**

---

## 📤 STEP 2: Upload Website Files to GitHub

### Method A: Easy - Using GitHub Web Interface (Recommended)

1. On your repository, click **Add file** → **Upload files**
2. Drag and drop your project folder OR select files:
   ```
   - index.html
   - robots.txt
   - css/ folder (with style.css)
   - js/ folder (main.js, menu-data.js, i18n.js)
   - images/ folder (all images)
   ```
3. Add commit message: `Initial commit: Dhaba Square website`
4. Click **Commit changes**

### Method B: Using Git (If you have Git installed)

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/dhabasquare.git
cd dhabasquare

# Copy your website files into this folder
# (index.html, css/, js/, images/, robots.txt)

# Add and commit
git add .
git commit -m "Initial commit: Dhaba Square website"
git push origin main
```

### Final GitHub Structure:
```
dhabasquare/
├── index.html
├── robots.txt
├── README.md
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── menu-data.js
│   └── i18n.js
└── images/
    ├── Logo/
    ├── Collage/
    └── (all images)
```

---

## 🔧 STEP 3: Enable GitHub Pages

1. Go to your repository **Settings**
2. Left sidebar → **Pages**
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**
5. Wait 1-2 minutes

### You'll see:
```
✓ Your site is published at https://YOUR_USERNAME.github.io/dhabasquare
```

**Test it:** Visit that URL - your website should load! 🎉

---

## 🔗 STEP 4: Connect Custom Domain (Hostinger DNS)

### 4.1 In GitHub (Tell GitHub about your domain)

1. Go back to Repository **Settings** → **Pages**
2. Under **Custom domain**, enter: `dhabasquare.com`
3. Click **Save**
4. ✅ GitHub auto-creates a CNAME file

---

### 4.2 In Hostinger (Point DNS to GitHub)

1. Login to **Hostinger hPanel**
2. Go to **Domains** → **dhabasquare.com**
3. Click **Manage DNS** (or **DNS Records**)
4. **Delete or keep existing records**, then add these:

#### **A Records** (Point to GitHub)
```
Type: A
Name: @
Points to: 185.199.108.153
TTL: 3600

Type: A
Name: @
Points to: 185.199.109.153
TTL: 3600

Type: A
Name: @
Points to: 185.199.110.153
TTL: 3600

Type: A
Name: @
Points to: 185.199.111.153
TTL: 3600
```

#### **AAAA Records** (IPv6 - Optional but recommended)
```
Type: AAAA
Name: @
Points to: 2606:50c0:8000::153
TTL: 3600

Type: AAAA
Name: @
Points to: 2606:50c0:8001::153
TTL: 3600

Type: AAAA
Name: @
Points to: 2606:50c0:8002::153
TTL: 3600

Type: AAAA
Name: @
Points to: 2606:50c0:8003::153
TTL: 3600
```

#### **CNAME Record** (For www subdomain)
```
Type: CNAME
Name: www
Points to: YOUR_USERNAME.github.io
TTL: 3600
```

5. Click **Save** for each record
6. **Wait 24-48 hours** for DNS to propagate (usually faster, 5-10 mins)

---

## ✅ STEP 5: Verify Everything Works

### Check GitHub Pages
1. Go to repository **Settings** → **Pages**
2. Should show: `✓ Your site is live at https://dhabasquare.com`
3. Look for green checkmark next to custom domain

### Test Your Domain
1. Visit **https://dhabasquare.com** (wait a few minutes if just set up)
2. Should show your Dhaba Square website
3. Check:
   - ✅ Page loads
   - ✅ Images display
   - ✅ No 404 errors
   - ✅ HTTPS works (🔒 padlock)
   - ✅ Buttons/links work

### Test www subdomain
1. Visit **https://www.dhabasquare.com**
2. Should also work and redirect to main domain

---

## 🔄 STEP 6: How to Update Your Website

From now on, updating is super easy:

### Via GitHub Web Interface (Easiest)
1. Go to your repository
2. Open file you want to edit
3. Click ✏️ (edit icon)
4. Make changes
5. Click **Commit changes**
6. Website updates automatically in 1-2 minutes! 🚀

### Via Git Command Line
```bash
# Navigate to your project
cd dhabasquare

# Make changes to files

# Upload changes
git add .
git commit -m "Update: fix styling" (or describe your change)
git push origin main

# Website updates automatically!
```

---

## 🎯 Common Updates

### Update Menu (Google Drive PDF)
1. Go to `index.html` in GitHub
2. Click ✏️ to edit
3. Search for `GOOGLE_DRIVE_FILE_ID`
4. Replace with new ID
5. Commit changes
6. Done! Site updates in 1-2 minutes

### Update Images
1. Go to repository → **images** folder
2. Click **Upload files**
3. Select new image
4. Commit changes
5. Done!

### Update Contact Info / Hours
1. Edit `index.html`
2. Find the section (use Ctrl+F)
3. Update text
4. Commit
5. Live in 1-2 minutes!

---

## 🔐 HTTPS / SSL

✅ **GitHub automatically provides free SSL (HTTPS)**
- Your site is automatically secure (🔒)
- No extra setup needed
- Renewal is automatic

---

## 📊 Performance Benefits

✅ **GitHub's CDN** = Fast loading worldwide  
✅ **Free hosting** = No monthly costs  
✅ **Automatic backups** = Git history  
✅ **Version control** = Track all changes  
✅ **No downtime** = Highly reliable  

---

## 🆘 Troubleshooting

### Domain shows "404 Not Found"
**Solution:**
- Wait 24 hours for DNS to propagate
- Check Hostinger DNS records are correct (copy-paste carefully!)
- Verify GitHub Pages settings show green checkmark
- Clear browser cache (Ctrl+Shift+Del)

### Website shows old version
**Solution:**
- Clear browser cache (Ctrl+Shift+Del)
- Check GitHub shows your latest commit
- Wait 2-3 minutes for deployment

### Images/CSS not loading
**Solution:**
- Check file paths in HTML (should start with `/`)
- Verify all files uploaded to GitHub
- Check folder structure matches

### HTTPS not working
**Solution:**
- GitHub auto-enables SSL
- If not showing 🔒, wait 5-10 minutes
- Check custom domain is set in GitHub Pages

### DNS not working
**Solution:**
1. Go to Hostinger → Domains → DNS
2. Verify all A records are exactly correct (copy from GitHub docs)
3. Use free DNS checker: https://dnschecker.org
4. Enter `dhabasquare.com`
5. Should show GitHub IP addresses (185.199.x.x)

---

## 📋 Checklist

- [ ] GitHub account created
- [ ] Repository `dhabasquare` created
- [ ] All files uploaded to GitHub
- [ ] GitHub Pages enabled
- [ ] Custom domain set in GitHub Pages
- [ ] A records added to Hostinger DNS
- [ ] CNAME record for www added (optional)
- [ ] Website loads at dhabasquare.com
- [ ] HTTPS works (🔒 visible)
- [ ] Images display correctly
- [ ] Links and buttons work
- [ ] Mobile view works

---

## 🎉 You're Done!

Your website is now:
- ✅ Hosted on GitHub (free, fast, reliable)
- ✅ Domain managed by Hostinger
- ✅ Automatically deployed when you push updates
- ✅ Secure with free HTTPS
- ✅ Backed up with Git version control

---

## 💡 Next Steps

1. **Submit to Google Search Console**
   - https://search.google.com/search-console
   - Verify domain
   - Submit sitemap: `dhabasquare.com/sitemap.xml`

2. **Monitor Analytics**
   - Google Analytics already added
   - Check https://analytics.google.com after 24 hours

3. **Promote Your Site**
   - Share on Instagram/Facebook
   - Update Google Business Profile
   - Get reviews on Google Maps

---

## 📞 Support

**GitHub Pages Help:** https://docs.github.com/en/pages  
**Hostinger DNS Help:** Hostinger Dashboard → Help  
**DNS Checker:** https://dnschecker.org  

---

**That's it! Your website is live on GitHub + Hostinger! 🚀**
