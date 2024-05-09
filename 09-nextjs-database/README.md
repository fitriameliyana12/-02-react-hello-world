Nama : Fitria Meliyana

NIM : 2341727002

Kelas : TI-4J

# Praktikum 1: Setup Database

Membuat project baru dengan templat

1. Mulailah membuat repo berdasarkan templat starter code ini: https://github.com/jti-polinema/09-nextjs-database (klik pada Use this template) kemudian beri nama repo: 09-nextjs-database pada akun GitHub Anda.

![img](/09-nextjs-database/img/prak%201%20no%201.PNG)

 Membuat Akun Vercel

2. Selanjutnya buat akun vercel (jika Anda belum memilikinya) di tautan ini https://vercel.com/signup

3. Pilih plan free "hobby" dan isi dengan nama Anda.

![img](/09-nextjs-database/img/prak%201%20no%203.PNG)

4. Kemudian pilih Continue with GitHub untuk terkoneksi dengan akun Vercel.

![img](/09-nextjs-database/img/prak%201%20no%204.PNG)

 Koneksikan dan Deploy project Anda

5. Selanjutnya, Anda akan diarahkan screen berikut untuk memilih repo dan impor dari GitHub yang telah Anda buat pada langkah nomor 1 tadi.

![img](/09-nextjs-database/img/prak%201%20no%205.PNG)

6. Beri nama project Anda dan klik Deploy.

![img](/09-nextjs-database/img/prak%201%20no%206.PNG)

7. Tunggu proses deploy selama ± 1 menit.

![img](/09-nextjs-database/img/prak%201%20no%207.PNG)

8. Hooray! 🥳 Project Anda sekarang sudah berhasil deploy di server Vercel.

![img](/09-nextjs-database/img/prak%201%20no%208.PNG)

Soal 1

Capture hasil deploy project Anda dan buatlah laporan di file README.md. Jelaskan apa yang telah Anda pelajari?
Jangan lupa push dengan pesan commit: "W09: Jawaban soal 1".

Dengan menggunakan Vercel dapat memudahkan pengembang untuk membangun, mendeploy dan mengelola situs web dan aplikasi front-end. Setiap kali pengembang melakukan perubahan ke proyek dan mengirimkannya ke repositori git, Vercel secara otomatis akan mendeteksi perubahan tersebut dan melakukan proses deploy baru dalam hitungan detik. Hal ini memungkinkan pengembang untuk melihat perubahan mereka secara langsung di lingkungan produksi dengan cepat dan mudah.

Membuat basis data Postgres

1. Selanjutnya untuk setup database, klik Continue to Dashboard dan pilih tab Storage pada dashboard project Anda. Lalu pilih Create pada basis data Postgres.

![img](/09-nextjs-database/img/prak%201%20b%20no%201.PNG)

2. Setujui terms, beri nama basis data, dan pastikan region basis data di set ke Washington D.C (iad1) - ini merupakan default region untuk semua project baru di Vercel. Meletakkan basis data pada region yang sama atau semakin dekat dengan kode aplikasi, Anda dapat mengurangi latency pada tiap request data.

![img](/09-nextjs-database/img/prak%201%20b%20no%202.PNG)

3. Setelah berhasil terhubung, arahkan pada tab .env.local, klik Show secret dan Copy Snippet seperti pada gambar berikut.

![img](/09-nextjs-database/img/prak%201%20b%20no%203a.PNG)

4. Buat file baru .env pada root project Anda, lalu paste hasil Copy Snippet tersebut.

![img](/09-nextjs-database/img/prak%201%20b%20no%204.PNG)

5. Akhirnya, jalankan perintah berikut di terminal untuk install Vercel Postgres SDK.

![img](/09-nextjs-database/img/prak%201%20b%20no%205.PNG)

Soal 2

Capture hasil basis data Anda dan buatlah laporan di file README.md. Jelaskan apa yang telah Anda pelajari?
Jangan lupa push dengan pesan commit: "W09: Jawaban soal 2".

Vercel juga dapat digunakan untuk membuat database. Di dalam praktikum ini kita telah mencoba membuat database
postgres. Untuk mengakses database tersebut, kita membuat file .env yang didalamnya terdapat kode dari vercel tadi kemudian dalam file .gigitnore ditambahkan .env tadi agar saat kita push ke github kode yang ada di .env tidak terbaca.



