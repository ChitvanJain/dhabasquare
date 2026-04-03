# Developer: Menu PDF Implementation Notes

## What Changed

The interactive menu system (with tabs, filters, and individual dish cards) has been replaced with a Google Drive PDF viewer for easier maintenance by non-technical restaurant staff.

---

## Files Modified

### 1. `index.html`
- **Removed:** Menu tabs, filters, and grid display (lines ~400-415 in old version)
- **Added:** PDF viewer iframe and download buttons in `.menu-pdf-container`
- **Modified:** Schema.org `hasMenu` property to reference PDF instead of `#menu`
- **Status:** All navigation links (nav, hero CTA, spotlight CTA) still point to `#menu` (anchor works fine)

### 2. `css/style.css`
- **Added:** `.menu-pdf-container` styles with responsive design
- **Added:** `.menu-actions` styles for download/view buttons
- **Added:** Mobile breakpoint for better display on phones
- **Unchanged:** All other menu-related styles remain

---

## Next Steps: When You Get the File ID

The restaurant manager will provide you with a **Google Drive File ID**. You need to replace `GOOGLE_DRIVE_FILE_ID` in two locations:

### Location 1: HTML - Embed URL (Line ~395)
```html
<iframe
  src="https://drive.google.com/file/d/REPLACE_WITH_FILE_ID/preview"
```

### Location 2: HTML - Download URL (Line ~404)
```html
<a href="https://drive.google.com/uc?export=download&id=REPLACE_WITH_FILE_ID"
```

### Location 3: HTML - View Full URL (Line ~410)
```html
<a href="https://drive.google.com/file/d/REPLACE_WITH_FILE_ID/view?usp=sharing"
```

### Location 4: Schema.org JSON-LD (Line ~125)
```json
"url": "https://drive.google.com/file/d/REPLACE_WITH_FILE_ID/view"
```

### Quick Replace Command (Bash)
```bash
# Replace GOOGLE_DRIVE_FILE_ID with actual ID in all locations
sed -i 's/GOOGLE_DRIVE_FILE_ID/YOUR_FILE_ID_HERE/g' index.html
```

---

## Testing Checklist

After replacing the File ID:

- [ ] Menu section displays PDF preview (iframe loads)
- [ ] "Download Menu PDF" button works (initiates download)
- [ ] "Open in New Tab" button works (opens PDF in new window)
- [ ] Navigation links still work (hover over Menu in nav bar)
- [ ] Mobile view: iframe height is responsive (600px on mobile)
- [ ] Schema.org validation passes (test with Google Schema validator)
- [ ] No console errors in browser DevTools

---

## Why Google Drive?

✅ **Non-technical friendly:** Staff can drag-drop new PDFs (no FTP, no Git)
✅ **Version history:** Automatic backups of old versions
✅ **Free:** No additional hosting costs
✅ **Shareable:** Can grant editing rights to multiple staff
✅ **Embeddable:** PDF displays directly on website
✅ **Mobile-friendly:** Responsive viewer works on all devices

---

## Fallback Behavior

If Google Drive link is broken or PDF doesn't load:
- Iframe will show "Unable to preview"
- Download/View buttons still work (direct links)
- User can still access PDF via direct link

---

## File References

- **Manager Guide:** `MENU_PDF_SETUP_GUIDE.md` (send to restaurant manager)
- **Old Menu Data:** `js/menu-data.js` (still included, not used — can delete later)
- **New Styles:** Added to `css/style.css` (search for `.menu-pdf-container`)

---

## URL Patterns Reference

| Purpose | Format | Example |
|---------|--------|---------|
| Embed in iframe | `https://drive.google.com/file/d/[ID]/preview` | Preview mode |
| Direct download | `https://drive.google.com/uc?export=download&id=[ID]` | Save to computer |
| Open in viewer | `https://drive.google.com/file/d/[ID]/view` | Full-screen view |

---

## Notes

- The PDF must be shared with "Viewer can access" permissions (not just me)
- Google Drive sometimes takes 5-10 minutes to process large PDFs
- Maximum file size: 25MB (recommend keeping under 5MB for fast loading)
- PDF quality: Ensure text is readable at normal zoom levels

---

**Implementation Status:** ✅ Ready for File ID — Awaiting from manager
