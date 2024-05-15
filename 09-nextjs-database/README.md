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

Melakukan seed ke basis data

1. Sekarang database Anda telah dibuat, mari kita isi dengan beberapa data awal. Ini akan memungkinkan Anda memiliki beberapa data untuk digunakan.

2. Di folder src/seeder proyek Anda, ada file bernama seed.js. Skrip ini berisi instruksi untuk membuat dan menyemai tabel invoices, customers, user, revenue.

3. Jangan khawatir jika Anda tidak memahami semua yang ada dalam kode tersebut, tetapi untuk memberi Anda gambaran umum, skrip itu menggunakan SQL untuk membuat tabel, dan data dari file src/seeder/data.js untuk mengisinya setelah tabel tersebut selesai dibuat.

4. Selanjutnya, di file package.json Anda, tambahkan baris skrip seed seperti berikut:

![img](/09-nextjs-database/img/prak%201%20c%20no%204.PNG)

5. Perintah tersebut akan mengeksekusi file seed.js. Sekarang jalankan perintah berikut di terminal:

![img](/09-nextjs-database/img/prak%201%20c%20error%20dontv%20config.PNG)

6. Apa yang terjadi ? error atau berhasil insert data ke database Postgre ?

hasilnya eror

Troubleshooting:

Jika Anda mengalami error karena module dotenv tidak ada, silakan Anda dapat menginstallnya terlebih dahulu dengan perintah npm i --save dotenv

![img](/09-nextjs-database/img/prak%201%20c%20npn%20--save.PNG)

Jika terjadi error karena module bcrypt tidak ditemukan, silakan install dengan perintah npm i --save bcrypt

![img](/09-nextjs-database/img/prak%201%20c%20cara%20menangani%20bycrypt.PNG)

Jika terjadi error karena data.js tidak ditemukan, silakan ubah kode di seed.js menjadi seperti ini: require('./data.js')

![img](/09-nextjs-database/img/prak%201%20c%20error%20tambahan%20kode%20seed%20js.PNG)

Jika berhasil melakukan seeding data ke database Postgre Vercel, maka akan tampil seperti gambar berikut.

![img](/09-nextjs-database/img/prak%201%20c%20berhasil%20error%20nya.PNG)

Soal 3
Capture hasil npm run seed Anda dan buatlah laporan di file README.md. 

Menjelajah Basis Data

1. Buka akun vercel Anda, cek pada sidenav klik Data seperti gambar di bawah ini.

![img](/09-nextjs-database/img/prak%201%20d%20no%201.png)

2. Pada bagian Browser, Anda akan melihat tabel baru terdiri dari: users, customers, invoices, dan revenue.

3. Dengan memilih setiap tabel tersebut, pastikan data telah sesuai seperti pada file src/seeder/data.js

4. Anda dapat melakukan query SQL dengan klik tab Query.

5. Cobalah eksekusi query berikut ini.

![img](/09-nextjs-database/img/prak%201%20d%20no%205.PNG)

![img](/09-nextjs-database/img/prak%201%20d%20jwaban%20no%205.PNG)

Soal 4
Capture hasil query Anda dan buatlah laporan di file README.md. Jelaskan apa yang telah Anda pelajari ? Cobalah eksekusi query SQL yang lain sesuai kreasi Anda, capture hasilnya dan jelaskan!

# Praktikum 2: Fetching Data (API)

Membuat Global Query (Model)

1. Pertama, siapkan struktur folder project Anda seperti pada gambar berikut ini.

![img](/09-nextjs-database/img/prak%202%20no%201.PNG)

2. Selanjutnya buat 2 file di dalam folder model yaitu definitions.tsx dan query.tsx. Kemudian salin kode berikut ini.

![img](/09-nextjs-database/img/prak%202%20no%202%20a.PNG)

src/model/definitions.tsx

![img](/09-nextjs-database/img/prak%202%20no%202%20definitions%201.PNG)
![img](/09-nextjs-database/img/prak%202%20no%202%20definitions%202.PNG)

src/model/query.tsx

![img](/09-nextjs-database/img/prak%202%20no%202%20query%201.PNG)
![img](/09-nextjs-database/img/prak%202%20no%202%20query%202.PNG)

3. Kemudian buat file utils.tsx di dalam folder utils dengan berisi kode berikut.

src/utils/utils.tsx

![img](/09-nextjs-database/img/prak%202%20no%203%20utils.PNG)

Membuat Komponen Atom

4. Lalu isi folder atoms dengan file fonts.tsx dengan kode berikut.
src\app\components\atoms\fonts.tsx

![img](/09-nextjs-database/img/prak%202%20no%204%20atom%20fonts.PNG)

5. Buat komponen molecules, ada 3 file yaitu card.tsx, latest-invoices.tsx, dan revenue-chart.tsx.
card.tsx

card.tsx

![img](/09-nextjs-database/img/prak%202%20chart.PNG)

latest-invoices.tsx

![img](/09-nextjs-database/img/prak%202%20invoices.PNG)

revenue-chart.tsx

![img](/09-nextjs-database/img/prak%202%20revenue.PNG)

Hasilnya ada beberapa kode programnya yang eror

![img](/09-nextjs-database/img/prak%202%20error%20hero%20icons.PNG)

![img](/09-nextjs-database/img/prak%202%20eror%20clx.PNG)

Troubleshooting:

Jika Anda mengalami error karena beberapa modul tidak ditemukan, silakan Anda dapat menginstallnya terlebih dahulu dengan perintah berikut:

npm i --save @heroicons/react

![img](/09-nextjs-database/img/prak%202%20npm%20hero%20icons.PNG)

npm i --save clsx

![img](/09-nextjs-database/img/prak%202%20npm%20clsx.PNG)

Kemudian perhatikan pada file package.json akan ada tambahan dependensi library yang telah berhasil ter-instal.

![img](/09-nextjs-database/img/prak%202%20tambahan%20package.json)

Terakhir, ganti semua kode di src/app/page.tsx dengan kode berikut.

![img](/09-nextjs-database/img/prak%202%20page.tsx)

Soal 5
Lakukan push, kemudian perhatikan di akun dashboard Vercel project Anda. Capture dan lampirkan link aplikasi Anda yang telah berhasil di deploy, kemudian buatlah laporan di file README.md. Jelaskan apa yang telah Anda pelajari ?

![img](/09-nextjs-database/img/prak%202%20hasil%20dashboard%20vercel.PNG)

Link: 

https://pbf-09-nextjs-database.vercel.app/


Fetching Data untuk komponen RevenueChart

Buka file src\app\page.tsx. Kemudian hapus comment pada komponen RevenueChart

![img](/09-nextjs-database/img/prak%202%20no%208.PNG)

Coba running localhost atau langsung deploy ke Vercel dengan cara push.

![img](/09-nextjs-database/img/prak%202%20no%2010.PNG)

Fetching Data untuk komponen LatestInvoices

Buka src\app\page.tsx kemudian lakukan import komponen LatestInvoices, lalu hapus comment pada komponen LatestInvoices di dalam fungsi Page(). 

![img](/09-nextjs-database/img/prak%202%20no%2011.PNG)

Jika Anda cek pada localhost, Anda akan melihat 5 data yang diambil dari basis data (bagian Latest Invoices). 

![img](/09-nextjs-database/img/prak%202%20no%2012.PNG)

# Tugas Praktikum

1. Jika Anda perhatikan pada file src\app\page.tsx untuk komponen Card sebenarnya telah dibuat sebagai molecules pada file src\app\components\molecules\card.tsx yaitu komponen CardWrapper. Silakan Anda sesuaikan sehingga dapat tampil seperti gambar berikut.

card.tsx 

![img](/09-nextjs-database/img/kode%20program%20card%20tugas%20praktikum.PNG)

page.tsx

![img](/09-nextjs-database/img/kode%20program%20page%20untuk%20tugas.PNG)

Hasilnya 

![img](/09-nextjs-database/img/tugas%20praktikum.PNG)

2. Perhatikan fungsi fetchCardData() (pada file src\model\query.tsx) dari soal nomor 1. Jelaskan maksud kode dan kueri yang dilakukan dalam fungsi tersebut!

Kode tersebut terdiri dari berbagai fungsi yang digunakan untuk mengakses data dari database PostgreSQL. Fungsi-fungsi ini mencakup pengambilan data pendapatan, tagihan terbaru, data kartu dashboard, tagihan yang difilter, halaman tagihan, data pelanggan, pelanggan yang difilter, dan pengguna berdasarkan alamat email. Untuk interaksi dengan database, digunakan modul @vercel/postgres, sementara fungsi formatCurrency() digunakan untuk memformat mata uang.



