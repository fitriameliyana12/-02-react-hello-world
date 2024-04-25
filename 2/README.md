Langkah 1 : Buat Folder Baru

Langkah 2 : Buat Project Baru
![img](/2/img/1.PNG)

Soal 1
Pada gambar tersebut, silakan Anda browsing apa yang dimaksud dengan:

TypeScript : adalah bahasa pemrograman open source yang dibangun di atas JavaScript. Bahasa pemrograman ini dirancang oleh Anders Hejlsberg dari Microsoft, yang juga desainer dari bahasa pemrograman C#.
ESLint : adalah adalah sebuah tools untuk melakukan static analyzes kode kita agar kita tau dengan cepat menemukan masalah atau potensi bug dari kode yang sudah kita buat.
Tailwind CSS : adalah framework CSS yang berbasis utility untuk membuat UI atau tampilan dari aplikasi web. Berbasis utility artinya Tailwind cuma terdiri dari 100% utility class dan nggak ada class komponen seperti Navbar, Button, Card, Modal, dll. Komponen-komponen ini kita buat sendiri dengan class utility.
App Router : adalah bagian dari aplikasi yang bertanggung jawab untuk mengarahkan permintaan dari pengguna ke bagian yang sesuai dari aplikasi. Ini sering digunakan dalam aplikasi web dan aplikasi berbasis layanan untuk mengelola rute atau URL dan menentukan bagaimana permintaan pengguna harus ditangani dan diarahkan ke tindakan atau layanan yang tepat. 
Import alias : adalah nama alternatif atau nama singkat untuk cmdlet atau untuk elemen perintah, seperti fungsi, skrip, file, atau file yang dapat dieksekusi.

Langkah 3 : Buka dengan VS Code

![img](/2/img/macam-macam%20folder.PNG)

Soal 2
Pada struktur project tersebut, jelaskan kegunaan folder dan file masing-masing tersebut!

1. .git : Folder ini adalah folder tersembunyi yang dibuat oleh Git. berisi semua informasi yang diperlukan oleh Git untuk melacak riwayat perubahan dalam proyek, seperti riwayat commit, cabang (branch), dan konfigurasi lainnya. 
2. node_modules : Folder ini berisi semua paket (packages) dan dependensi yang diperlukan oleh proyek React. biasanya diinstal menggunakan npm (Node Package Manager) atau Yarn, dan berisi kode JavaScript, file konfigurasi, dan aset lainnya yang diperlukan untuk menjalankan proyek.
3. public : Folder ini berisi file-file yang akan disajikan secara langsung oleh server web kepada pengguna, seperti halaman HTML, gambar, atau file lainnya yang perlu diakses secara langsung dari browser.
4. src : Folder ini berisi kode sumber (source code) dari aplikasi React. Ini adalah tempat dimana Anda akan menulis komponen-komponen React, logika aplikasi, dan file-file lain yang diperlukan untuk membangun aplikasi. Biasanya, file utama aplikasi React seperti index.js atau App.js akan berada di dalam folder ini.
5. .eslintrc.json : File ini adalah konfigurasi untuk ESLint, sebuah alat yang digunakan untuk menganalisis kode JavaScript atau TypeScript dalam proyek dan menemukan masalah potensial. Di dalam file ini, Anda bisa menentukan aturan-aturan spesifik yang ingin diterapkan pada kode Anda, seperti gaya penulisan, aturan format, dan banyak lagi.
6. .gitignore : File ini berisi daftar file dan folder yang akan diabaikan oleh Git ketika Anda menjalankan perintah-perintah seperti git add atau git commit. Ini sangat berguna untuk mengabaikan file yang dihasilkan secara otomatis atau file-file sementara yang tidak perlu disertakan dalam repositori Git, seperti file konfigurasi lokal, file output, atau folder node_modules.
7. .next.config.mjs : File ini adalah konfigurasi kustom untuk proyek Next.js. Anda dapat menggunakan file ini untuk mengkonfigurasi berbagai aspek aplikasi Next.js, seperti pengaturan server, pengaturan webpack, dan banyak lagi.
8. next-env.d.ts : Ini adalah file yang digunakan oleh TypeScript untuk mendeklarasikan tipe-tipe yang spesifik untuk Next.js. Ini berisi deklarasi-deklarasi yang dibutuhkan agar TypeScript dapat bekerja dengan benar dengan kode Next.js.
9. package.json : file yang mengelola dependensi dan skrip dalam proyek Node.js.
10. package-lock.json : berisi daftar dependensi lengkap, bersama dengan versi yang tepat, yang terinstal dalam proyek. file package.json dan file package-lock.json penting untuk memastikan konsistensi instalasi paket dan menjaga keamanan dan kestabilan proyek.
11. postcss.config.js : adalah konfigurasi untuk PostCSS, alat yang digunakan untuk memproses dan mengonversi kode CSS dengan menggunakan plugin-plugin.
12. readme.md : adalah file Markdown yang berisi dokumentasi untuk proyek. untuk memberikan informasi tentang cara menginstal, menggunakan, dan berkontribusi pada proyek, serta informasi-informasi lain yang mungkin berguna bagi pengguna atau kontributor proyek.
13. tailwind.config.ts : adalah konfigurasi untuk Tailwind CSS, sebuah kerangka kerja CSS yang sangat fleksibel dan dapat disesuaikan. file ini untuk mengkonfigurasi berbagai aspek dari Tailwind CSS, seperti tema, varian, dan banyak lagi.
14. tsconfig.json : adalah konfigurasi untuk TypeScript, yang digunakan untuk mengatur cara TypeScript mengompilasi kode Anda. file ini untuk mengatur berbagai opsi kompilasi TypeScript, seperti pengaturan modul, target platform, dan banyak lagi.


Langkah 4: Run
![img](/2/img/terminal.PNG)

Jika di browser telah tampil seperti gambar berikut ini, Selamat!
![img](/2/img/selamat.PNG)

Soal 3
Gantilah teks pada bagian atas dengan Nama - NIM Anda. Contoh seperti gambar berikut:
![img](/2/img/nama%20nim.PNG)

Ketika Anda telah berhasil mengganti teks tersebut, Anda tidak perlu menjalankan perintah npm run dev dan tidak juga diperlukan me-reload halaman di browser. Tiba-tiba perubahan itu tampil, Mengapa terjadi demikian? Jelaskan!
Jawaban : penggunaan npm run dev digunakan dalam pengembangan perangkat lunak untuk menjalankan serve pengembangan lokal secara otomatis, ini dikarenakan mengunakan alat seperti reactJS secara otomatis.


Cobalah buat project react lainnya dengan menggunakan framework Remix dan Gatsby. Ini tidak perlu di push, cukup screenshot dan jelaskan perbedaannya diantara ketiga framework tersebut (termasuk Next.js) di file README nomor 1.

![img](/2/img/welcome%20remix.PNG)
![img](/2/img/gatsby.PNG)

ketika mempertimbangkan opsi Next.js, Remix, dan Gatsby, jelas bahwa Next.js menonjol sebagai kerangka kerja yang paling matang dan mapan. Dengan basis pengguna yang lebih besar, dokumentasi yang luas, dan dukungan komunitas yang kuat, Next.js adalah pilihan yang dapat diandalkan. Ini juga mendukung situs statis dan dinamis, menjadikannya solusi yang cocok untuk berbagai kasus penggunaan.Di sisi lain, jika kesederhanaan, kecepatan, dan pengaturan minimal adalah prioritas Anda, Remix mungkin merupakan pilihan yang lebih sesuai. Meskipun masih dalam tahap pengembangan dan belum memiliki banyak contoh serta kasus penggunaan, aplikasi ini mendapatkan tanggapan positif dari para pengembang dan menunjukkan harapan di masa depan.Mengenai Gatsby, ia mengalami penurunan popularitas, namun tetap menjadi pilihan yang lebih cepat dan ringan karena kemampuan pembuatan situs statisnya.