# Your Name — Network Engineering Portfolio

A single-page portfolio site: About Me, CCNA certification breakdown, and a library
of lab writeups (PDF) with view-in-browser links. Light theme, scroll-triggered
blur reveal, vertical "rail" running down the page connecting each section.

## 1. Before you push: edit the placeholders

Open `index.html` and replace:

- `Your Name` (appears in the `<title>`, nav, hero, and footer)
- `your.email@example.com`
- `https://linkedin.com/in/yourprofile`
- `https://github.com/yourusername`
- The About Me paragraphs (currently generic — make them yours)

## 2. Add your PDFs

Put your actual PDF files into the `documents/` folder, **renamed exactly as below**
(spaces replaced with hyphens — this avoids broken links from unencoded spaces in URLs):

| Original filename | Rename to |
|---|---|
| Designing a Multiprotocol Network with BGP, ISIS, OSPF and EIGRP.pdf | `Designing-a-Multiprotocol-Network-with-BGP-ISIS-OSPF-and-EIGRP.pdf` |
| Factory Reset and Introduction to the Web GUI.pdf | `Factory-Reset-and-Introduction-to-the-Web-GUI.pdf` |
| Fortinet Firewall Lightweight Access Point Configuration.pdf | `Fortinet-Firewall-Lightweight-Access-Point-Configuration.pdf` |
| Fortinet Initial Configuration Lab.pdf | `Fortinet-Initial-Configuration-Lab.pdf` |
| Fortinet VPN Lab.pdf | `Fortinet-VPN-Lab.pdf` |
| Local Artificial Intelligence integrated with Web Server.pdf | `Local-Artificial-Intelligence-integrated-with-Web-Server.pdf` |
| Multi Area OSPF Configuration Lab.pdf | `Multi-Area-OSPF-Configuration-Lab.pdf` |
| Palo Alto VPN Lab.pdf | `Palo-Alto-VPN-Lab.pdf` |
| SOHO Lab Writeup.pdf | `SOHO-Lab-Writeup.pdf` |
| Switch Attack and Mitigation Lab-1.pdf | `Switch-Attack-and-Mitigation-Lab-1.pdf` |
| URL Filtering Writeup.pdf | `URL-Filtering-Writeup.pdf` |
| Windows 11 Lab Word.pdf | `Windows-11-Lab-Word.pdf` |

Tip: On Windows, select all the files, right-click → Rename, or use PowerShell:

```powershell
Get-ChildItem *.pdf | Rename-Item -NewName { $_.Name -replace ' ', '-' }
```

(Run that inside the folder with your PDFs — it swaps spaces for hyphens automatically.
Double-check commas in the BGP file get removed too, since the link expects no commas.)

## 3. Push to GitHub

```bash
# From inside this folder:
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

## 4. Turn on GitHub Pages

1. Go to your repo on GitHub → **Settings** → **Pages**
2. Under **Branch**, pick `main` and `/ (root)`, then **Save**
3. Your site will be live in a minute or two at:
   `https://yourusername.github.io/your-repo-name/`

## File structure

```
.
├── index.html
├── styles.css
├── script.js
├── documents/        ← put your renamed PDFs here
└── README.md
```

## Notes

- The site is plain HTML/CSS/JS — no build step, no dependencies beyond two Google Fonts.
- Scroll motion blur and the vertical rail respect `prefers-reduced-motion` for
  visitors who have that turned on.
- If you'd rather visitors not be able to right-click-save the PDFs, that's not
  really enforceable on a public static site — anyone who can view a PDF can save it.
