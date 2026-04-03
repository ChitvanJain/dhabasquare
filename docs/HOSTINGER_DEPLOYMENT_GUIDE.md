# Deploy Dhaba Square Website to Hostinger
## Complete Guide for Single Web Hosting

---

## 📋 Prerequisites

Before you start, you need:
- ✅ Hostinger account (you already have this)
- ✅ Domain name pointing to Hostinger (already configured)
- ✅ All website files ready locally
- ✅ FTP/File Manager access to Hostinger

---

## 🚀 Step 1: Prepare Your Files Locally

Your website consists of:
```
dhabasquare/
├── index.html          (main website file)
├── css/
│   └── style.css       (all styling)
├── js/
│   ├── main.js         (interactivity)
│   ├── menu-data.js    (menu items)
│   └── i18n.js         (translations)
├── images/             (all photos)
│   ├── Logo/           (favicon files)
│   ├── Collage/        (gallery images)
│   ├── champaran-mutton.jpg
│   ├── khatia.webp
│   └── (other images)
└── robots.txt          (SEO file)
```

**Create a ZIP file** of all these files (easier to upload).

---

## 🌐 Step 2: Access Hostinger File Manager

### Option A: Via Hostinger hPanel (Recommended - Easiest)

1. Log in to **Hostinger hPanel** → https://hpanel.hostinger.com
2. Click **Files** (or **File Manager**)
3. You'll see your current website files
4. Default location: `public_html/` folder

### Option B: Via FTP (More Control)

If you prefer FTP:
1. Go to hPanel → **Hosting** → **Manage**
2. Scroll down to **FTP/SFTP Accounts**
3. Create or use existing FTP account
4. Use FileZilla or WinSCP to connect
5. Navigate to `public_html` folder

**We'll use File Manager (Option A) for this guide**

---

## 📁 Step 3: Backup Current Website (IMPORTANT!)

1. In Hostinger File Manager, select ALL current files
2. Download them as ZIP (or just note what's there)
3. **Keep this backup** in case anything goes wrong

**This is important** - you're replacing your designer website, so backup first!

---

## 🗑️ Step 4: Delete Old Website Files

1. In File Manager, go to `public_html/`
2. Select all files and folders (Ctrl+A)
3. Click **Delete**
4. Confirm deletion

⚠️ **IMPORTANT:** Only delete if you have backed up your old site!

---

## 📤 Step 5: Upload New Website Files

### Method A: Upload ZIP and Extract (Faster)

1. In File Manager, click **Upload**
2. Select your `dhabasquare.zip` file
3. Wait for upload to complete
4. Right-click ZIP file → **Extract**
5. Delete the ZIP file after extraction

### Method B: Upload Individual Files

1. Create folders in `public_html/`:
   - `css/`
   - `js/`
   - `images/`

2. Upload files to each folder:
   - `index.html` → `public_html/`
   - All files from `css/` → `public_html/css/`
   - All files from `js/` → `public_html/js/`
   - All image files → `public_html/images/`
   - `robots.txt` → `public_html/`

3. Make sure structure matches your local folder structure

### ✅ Final Structure on Hostinger:
```
public_html/
├── index.html
├── robots.txt
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

## 🔗 Step 6: Update File Paths (If Needed)

If you used absolute paths like `/images/logo.png`, they should work as-is.

**Check if paths need updating:**
- Local: `/images/logo.png` → Online: `/images/logo.png` ✓ (No change needed)
- Local: `images/logo.png` (relative) → Keep as relative

**Your site already uses correct paths:**
- `/images/Logo/favicon-32x32.png` ✓
- `/css/style.css` ✓
- `/js/main.js` ✓

No changes needed!

---

## 🌍 Step 7: Test Your Website

1. **Wait 5-10 minutes** for files to fully process
2. Go to **https://www.dhabasquare.com** (or your domain)
3. Check that:
   - ✅ Page loads without errors
   - ✅ Images display correctly
   - ✅ Styling looks good (colors, fonts, layout)
   - ✅ Navigation links work
   - ✅ "Order Now" button works
   - ✅ "Reserve a Table" button works
   - ✅ Gallery images display
   - ✅ Instagram feed displays
   - ✅ Maps show correctly

### If something doesn't work:
- Check console (F12 → Console tab) for error messages
- Verify all image paths exist in File Manager
- Check CSS/JS files uploaded completely
- Clear browser cache (Ctrl+Shift+Del) and reload

---

## 🔒 Step 8: Update Domain & SSL

Hostinger should handle this automatically if your domain is already connected.

**Verify SSL (HTTPS):**
1. Visit your site
2. Look for 🔒 padlock in browser address bar
3. Should say "Secure" or "Connection is secure"

If NOT secure:
1. Go to hPanel → **SSL**
2. Click **Manage SSL**
3. Select **Free Shared SSL** or **Let's Encrypt**
4. Click **Activate**
5. Wait 5-10 minutes for activation

---

## ⚙️ Step 9: Configure Additional Settings

### Caching (Performance)
1. hPanel → **Hosting** → **Caching**
2. Enable **Browser Caching** ✅
3. Enable **Server-Side Caching** (if available) ✅

### PHP Version (Make sure it's current)
1. hPanel → **Hosting** → **PHP Version**
2. Should be **PHP 8.1 or higher**
3. Select latest stable version

### Email (Optional)
If you want `contact@dhabasquare.com`:
1. hPanel → **Email**
2. Create email account
3. Set up forwarding or webmail access

---

## 🚀 Step 10: Go Live!

1. ✅ Site loads correctly at your domain
2. ✅ All images visible
3. ✅ No console errors
4. ✅ Links work
5. ✅ Maps display
6. ✅ Mobile view works (test on phone)

**Your site is now live!** 🎉

---

## 📱 Test on Mobile

1. Open site on your phone browser
2. Verify:
   - ✅ Text is readable (not too small)
   - ✅ Images display
   - ✅ Navigation menu opens
   - ✅ Buttons are clickable
   - ✅ Forms work

---

## 🔧 Troubleshooting

### Q: "404 Not Found" Error
**A:** 
- Check file names (case-sensitive on some servers)
- Verify `index.html` is in `public_html/` root
- Check folder structure matches

### Q: CSS/Images not loading
**A:**
- Verify paths start with `/` (absolute paths)
- Check files exist in File Manager
- Clear browser cache (Ctrl+Shift+Del)
- Check browser console (F12) for error messages

### Q: JavaScript not working (buttons, carousel, etc.)
**A:**
- Check console for errors (F12 → Console)
- Verify `js/main.js` is uploaded completely
- Check `js/menu-data.js` exists
- Verify `js/i18n.js` exists

### Q: Images showing broken image icon
**A:**
- Check exact image file names match HTML
- Verify image files uploaded to `images/` folder
- Check file extensions (`.jpg`, `.webp`, `.png`)
- Verify image names are lowercase if HTML uses lowercase

### Q: Need to roll back to old website
**A:**
- Go to File Manager → Backup (if available)
- Or restore from your saved backup ZIP
- Or restore from Hostinger automatic backup

---

## 📊 Monitoring & Maintenance

### Weekly Checks:
- [ ] Website loads without errors
- [ ] Images display correctly
- [ ] Links work
- [ ] Mobile view works

### Monthly Checks:
- [ ] Update menu (if using PDF from Google Drive)
- [ ] Check for console errors
- [ ] Test contact/order forms
- [ ] Verify Google Maps display

### SEO Checks (Monthly):
- [ ] Google Search Console shows no errors
- [ ] Meta tags are correct
- [ ] Images have alt text
- [ ] Mobile friendly (check with Google Mobile-Friendly Test)

---

## 💡 Next Steps

Once site is live:

1. **Submit to Google Search Console**
   - Go to https://search.google.com/search-console
   - Add your domain
   - Upload or add DNS record to verify
   - Submit sitemap: `https://www.dhabasquare.com/sitemap.xml`

2. **Monitor Analytics** (Optional)
   - Add Google Analytics code
   - Track visitors, popular pages, etc.

3. **Set Up Email**
   - Create contact@ email for inquiries
   - Set up forwarding to your personal email

4. **Enable Auto-Backups**
   - hPanel → Hosting → Backups
   - Enable automatic daily/weekly backups

---

## ❓ Common Hostinger Paths

| Item | Path |
|------|------|
| Main website files | `/public_html/` |
| Subdomain (blog.example.com) | `/public_html/blog/` |
| Backups folder | Not accessible (automatic) |
| Error logs | hPanel → Hosting → Error Logs |
| Database | hPanel → Databases |

---

## 📞 Support

**If you get stuck:**
1. Check browser console (F12) for error messages
2. Verify all files uploaded correctly in File Manager
3. Clear browser cache and reload
4. Contact Hostinger support: hPanel → Support chat
5. Email support with error messages/screenshots

---

## ✅ Checklist Before Going Live

- [ ] All files uploaded to `public_html/`
- [ ] Folder structure matches (css/, js/, images/)
- [ ] SSL/HTTPS enabled (🔒 visible)
- [ ] Website loads at domain name
- [ ] All images display
- [ ] CSS styles applied correctly
- [ ] Buttons and links work
- [ ] Mobile view works
- [ ] No console errors (F12)
- [ ] Maps display with street view
- [ ] Instagram feed loads
- [ ] Gallery images show
- [ ] Old website backed up
- [ ] Old files deleted

---

## 🎉 You're Done!

Your Dhaba Square website is now live on Hostinger!

**Next:** Share your site with customers, friends, and on social media.

---

**Questions?** Contact Hostinger support or refer to their documentation.
