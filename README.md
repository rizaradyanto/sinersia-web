# SINERSIA - Website Profil

Website profil resmi **PT Sinergi Kompetensi Indonesia (SINERSIA)**.
Dibuat dengan **HTML5, CSS3, dan JavaScript vanilla** (tanpa framework) agar
mudah dipelajari, diedit, dan di-*deploy* ke GitHub Pages / hosting.

Target domain: **sinersia.web.id**

---

## 1. Struktur Folder

```
website/
│
├── index.html          -> Halaman utama (Home)
├── about.html          -> Halaman Tentang (profil, visi, misi)
├── programs.html       -> Halaman Program & Kegiatan
├── publications.html   -> Halaman Publikasi
├── contact.html        -> Halaman Kontak (info + formulir)
│
├── css/
│   └── style.css       -> Seluruh tampilan (warna, layout, responsif)
│
├── js/
│   └── script.js       -> Interaksi (menu mobile, validasi form, tahun footer)
│
├── images/
│   ├── README.txt
│   ├── logo-sinersia.png
│   └── logo-sinersia-alt.png
│
└── README.md           -> File ini (panduan)
```

## 2. Fungsi Setiap File

| File | Fungsi |
|------|--------|
| `index.html` | Halaman beranda: hero, ringkasan tentang, program, publikasi, CTA. |
| `about.html` | Profil lembaga, visi, misi, dan nilai. |
| `programs.html` | 6 kartu program utama + contoh menu pelatihan. |
| `publications.html` | Daftar publikasi (modul, panduan, artikel, dll). |
| `contact.html` | Alamat, telepon, email, dan formulir kontak. |
| `css/style.css` | Semua gaya tampilan. Warna diatur di bagian `:root` agar mudah diganti. |
| `js/script.js` | Menu mobile, efek header saat scroll, validasi formulir, tahun otomatis. |
| `images/` | Menyimpan logo dan gambar. |

> Semua file saling terhubung dengan **relative path** (misalnya `css/style.css`,
> `images/logo-sinersia.png`), sehingga bisa dijalankan secara lokal tanpa server.

## 3. Cara Menjalankan Website di Komputer

1. Buka folder `website/`.
2. Klik dua kali file `index.html` (akan terbuka di browser).
3. Navigasikan ke Home / Tentang / Program / Publikasi / Kontak.

Opsional (disarankan untuk pengembangan):
- Jika memakai **VS Code**, pasang ekstensi *Live Server*, lalu klik kanan
  `index.html` -> **Open with Live Server**.

## 4. Cara Memeriksa Semua Link Bekerja

1. Buka setiap halaman (Home, Tentang, Program, Publikasi, Kontak).
2. Klik semua menu di navbar -> harus berpindah halaman dengan benar.
3. Klik tombol **“Pelajari Lebih Lanjut”**, tombol kartu program, tombol CTA,
   dan email/WhatsApp di footer.
4. Buka dengan ukuran jendela berbeda (desktop, tablet, ponsel) atau tekan
   `Ctrl + Shift + M` di browser untuk mode responsif.
5. Cek menu hamburger muncul dan berfungsi di layar kecil.

## 5. Bagian yang Perlu Anda Ganti

- **Visi & Misi** (`about.html`) -> sesuaikan dengan dokumen resmi.
- **Daftar Publikasi** (`publications.html`) -> saat ini masih **contoh**.
- **Media sosial** (footer semua halaman) -> ganti `#` dengan tautan akun resmi.
- **Formulir kontak** -> belum terhubung ke server; lihat catatan di `js/script.js`.
- **Domain** -> sesuaikan bila sudah memakai `sinersia.web.id`.

---

## 6. Panduan GitHub (langkah demi langkah)

> Git belum terpasang di komputer ini. Unduh dan pasang dahulu dari
> <https://git-scm.com/download/win>, lalu buka **Git Bash** atau **PowerShell**.
> Perintah di bawah dijalankan dari dalam folder `website/`.

### a. Inisialisasi repository
```bash
git init
```

### b. Menambahkan file
```bash
git add .
```

### c. Commit pertama
```bash
git commit -m "Website pertama SINERSIA"
```

### d. Menghubungkan ke repository GitHub
Buat repository baru di GitHub (misalnya bernama `sinersia-web`), lalu:
```bash
git branch -M main
git remote add origin https://github.com/USERNAME/sinersia-web.git
```
Ganti `USERNAME` dengan username GitHub Anda.

### e. Push ke GitHub
```bash
git push -u origin main
```

### f. Deployment dengan GitHub Pages
1. Buka repository di GitHub.
2. Masuk **Settings** -> **Pages**.
3. Pada **Source**, pilih **Deploy from a branch**.
4. Pilih branch **main** dan folder **/ (root)** -> **Save**.
5. Tunggu 1–2 menit. Website akan tersedia di:
   `https://USERNAME.github.io/sinersia-web/`

### g. Domain kustom (sinersia.web.id)
1. Di **Settings -> Pages -> Custom domain**, isi `sinersia.web.id` -> Save.
2. Di penyedia domain (misalnya **Sumopod**), tambahkan DNS:
   - `A` record ke IP GitHub Pages, dan/atau
   - `CNAME` untuk `www` ke `USERNAME.github.io`
3. Aktifkan **Enforce HTTPS**.

---

*Dokumen ini dibuat sebagai panduan belajar. Jangan menjalankan perintah git
yang bersifat menghapus repository/data tanpa konfirmasi.*
