 Nama  : Fitria Meliyana

 NIM   : 2341727002

 Kelas : TI-4J



# Praktikum 1: Instalasi Redux dan bootstrap
1. Kita install project next.js baru, karena kita tidak menggunakan default App Router. Kita buat project baru dengan nama pertemuan-06 pada repo PBF kita. 

![img](/pertemuan-06/img/praktikum%201%20langkah%201%20buat%20folder.PNG)

2. Kita buka open folder untuk project pertemuan-06 di VS Code, maka isi direktori yang ada di dalamnya sedikit berbeda dengan project yang sudah pernah kita buat sebelumnya. Yaitu terdapat folder pages dan styles.

![img](/pertemuan-06/img/praktikum%201%20langkah%202.PNG)

3. Kali ini kita coba pakai CSS Library Bootstrap dengan menjalankan perintah

![img](/pertemuan-06/img/praktikum%201%20npm%20install%20bootstrap.PNG)

4. Kemudian kita import bootstrap pada aplikasi next.js kita. Kita edit file pages/_app.tsx

![img](/pertemuan-06/img/praktikum%201%20-app.tsx)

5. Sekarang kita perlu mencoba implementasi bootstrap pada project next.js kita. Contoh kita edit file pages/index.tsx menjadi seperti ini

![img](/pertemuan-06/img/praktikum%201%20index.tsx)

Dan hasilnya 

![img](/pertemuan-06/img/praktikum%201%20hasil%201.PNG)

![img](/pertemuan-06/img/praktikum%201%20hasil%202.PNG)

# Praktikum 2: Contoh Login dengan Redux

1. Komponen yang digunakan pada praktikum kali ini adalah redux-toolkit dan redux-persistent sehingga kita perlu menginstall-nya

![img](/pertemuan-06/img/praktikum%202%20langkah%201.PNG)

2. Selanjutnya kita install wrapper untuk redux di next.js

![img](/pertemuan-06/img/praktikum%202%20langkah%202.PNG)

3. Selain itu, kita akan menggunakan html parser yang ada di react. Hal ini kita gunakan untuk memparsing html string menjadi sebuah html page

![img](/pertemuan-06/img/praktikum%202%20langkah%203.PNG)

4. Setelah berhasil menginstal kita cek di file package.json apakah library sudah ada

![img](/pertemuan-06/img/praktikum%202%20pakage.json)

5. Selanjutnya, kita buat folder dengan nama redux yang sejajar dengan folder public

![img](/pertemuan-06/img/praktikum%202%20folder%20redux.PNG)

6. Kemudian kita buat file redux/auth/authSlice.js seperti berikut

![img](/pertemuan-06/img/praktikum%202%20autslice.PNG)

7. Selanjutnya kita buat file redux/store/store.js seperti berikut

![img](/pertemuan-06/img/praktikum%202%20store.PNG)

8. Key pada persistConfig kita simpan pada file .env.local dengan tujuan agar konfigurasi lebih mudah dan aman. Sehingga jika belum ada file .env.local, kita buat dahulu

![img](/pertemuan-06/img/praktikum%202%20env.local)

9. Selanjutnya, kita buat file baru di pages/login.tsx, dan kita tulis kode berikut

![img](/pertemuan-06/img/praktikum%202%20login.tsx%201.PNG)

![img](/pertemuan-06/img/praktikum%202%20login.tsx%202.PNG)

10. Jalankan project kita di browser, dan amati apa yang terjadi?

![img](/pertemuan-06/img/praktikum%202%20hasil%20tampilan%201.PNG)

Ketika kita klik button Login, maka hasilnya 

![img](/pertemuan-06/img/praktikum%202%20hasil%20kedua%20berhasil%20login.PNG)


Soal

1. Coba akses http://localhost:3000/login, dan klik tombol login. Kemudian lakukan refresh page berkali-kali (jika perlu restart npm run dev nya). Simpulkan apa yang terjadi ? 

Yang terjadi seperti gambar di bawah ini 

![img](/pertemuan-06/img/praktikum%202%20soal%201%20hasil%20refresh%20login.PNG)

2. Baris 37 dan 43 terdapat method parse(), apa yang terjadi jika kita tidak menggunakan method tersebut?

Tanpa menggunakan metode parse(), string HTML yang dimasukkan langsung ke dalam JSX akan ditampilkan sebagai teks biasa di layar, bukan sebagai kotak pesan atau tombol yang Anda harapkan. Ini berarti, jika Anda menghilangkan parse() dan tetap menggunakan string HTML seperti yang Anda lakukan dalam kode program tersebut, teks tersebut akan muncul di layar tanpa diinterpretasikan sebagai elemen HTML yang sesungguhnya. Dengan menggunakan parse(), string HTML diubah menjadi elemen-elemen React yang sesuai, sehingga kotak pesan dan tombol yang dihasilkan akan sesuai dengan tampilan yang diharapkan.

# Praktikum 3: Membuat Aplikasi Counter Sederhana

1. Kita buat file di redux/counter/naikTurunSlice.js

![img](/pertemuan-06/img/prak%203%20naikturunSlice.js)

2. Setelah itu kita modifikasi redux/store/store.js untuk menambahkan Redux reducer pada store

![img](/pertemuan-06/img/prak%203%20store.js)

3. Selanjutnya kita buat halaman untuk menampilkan counter.Kita buat file baru di pages/counter.tsx

![img](/pertemuan-06/img/prak%203%20counter.tsx%201.PNG)

![img](/pertemuan-06/img/prak%203%20counter.tsx%202.PNG)

Maka hasilnya akan seperti di bawah ini 

![img](/pertemuan-06/img/prak%203%20hasil.PNG)

Jika kita kurangi sampai kurang dari 0, maka hasilnya

![img](/pertemuan-06/img/prak%203%20hasil%20jika%20kurang%20dari%200.PNG)

# Tugas (Pertanyaan Praktikum)

Berdasarkan pada praktikum sebelumnya yang telah dilakukan, beberapa pertanyaan terkait praktikum perlu diselesaikan yaitu sebagai berikut.

1. Apa kegunaan dari kode ini import { useEffect } from "react"; Pada file pages/_app.tsx? jelaskan

Jawaban : Kode tersebut mengimpor useEffect dari pustaka React. useEffect adalah salah satu hook yang disediakan oleh React untuk mengelola efek samping dalam komponen fungsional. 
Ini digunakan untuk melakukan tindakan selama atau setelah render sebuah komponen.
Secara keseluruhan, tujuan kode ini adalah untuk memastikan bahwa skrip JavaScript Bootstrap dimuat setelah aplikasi dirender, 
sehingga Bootstrap dapat diterapkan secara konsisten di seluruh aplikasi.


2. Jika pada file pages/_app.tsx kita tidak menggunakan useEffect (menghapus baris 3, dan baris 9-11, apa yang akan terjadi?

Jawaban : Jika Anda menghapus baris yang mengimpor useEffect dan juga bagian yang menggunakan useEffect dari kode pages/_app.tsx, maka konsekuensinya adalah bahwa skrip JavaScript Bootstrap tidak akan dimuat secara otomatis setiap kali aplikasi dirender.


3. Mengapa di react/nextjs penulisan tag html untuk class, harus diganti menjadi className ?

Jawaban : 
Penggantian class menjadi className dalam React dan Next.js dilakukan untuk menghindari konflik dengan kata kunci JavaScript class, yang digunakan untuk mendefinisikan kelas. Dengan menggunakan className, 
kita memastikan bahwa JSX tidak bingung antara atribut HTML class dan kata kunci JavaScript class.


4. Apakah store pada nextjs bisa menyimpan banyak redux reducer?

Jawaban : Ya, dalam Next.js Anda dapat menggunakan Redux untuk menyimpan banyak reducer. Redux sendiri adalah alat manajemen status yang memungkinkan Anda menyimpan semua data aplikasi Anda dalam satu store global. 
Anda dapat memiliki banyak reducer di Redux, dan setiap reducer mengelola bagian tertentu dari state aplikasi Anda.


5. Jelaskan kegunaan dari file store.js!

Jawaban : Membuat Store Redux: Menggabungkan reducer-reducer menjadi satu root reducer dan membuat store Redux menggunakan fungsi createStore().Menyediakan Store untuk Aplikasi: Mengekspor store sehingga dapat diakses dari berbagai bagian aplikasi, memungkinkan komponen-komponen untuk mengakses dan memperbarui state aplikasi yang disimpan di dalam store Redux.


6. Pada file pages/login.tsx, apa maksud dari kode ini ?
const { isLogin } = useSelector((state) => state.auth);

Jawaban : digunakan untuk mengambil nilai isLogin dari state Redux menggunakan hook useSelector yang disediakan oleh React Redux. Ini berarti kita dapat menggunakan nilai isLogin dari state Redux untuk menentukan bagaimana tampilan UI pada komponen LoginCheck akan ditampilkan, berdasarkan status login pengguna. Jika isLogin bernilai true, maka pesan berhasil login dan tombol "Log out" akan ditampilkan. 
Jika isLogin bernilai false, maka pesan Anda telah logout dan tombol "Log in" akan ditampilkan.


7. Pada file pages/counter.tsx, apa maksud dari kode ini?
const {totalCounter} = useSelector((state) => state.counter);

Jawaban : Potongan kode itu mengambil nilai totalCounter dari state aplikasi menggunakan Redux Toolkit. Ini seperti mengambil jumlah mobil yang telah dihitung dalam aplikasi kita. Kemudian, nilai totalCounter digunakan untuk menampilkan jumlah mobil tersebut di layar. Jadi, secara sederhana, potongan kode tersebut membantu kita menampilkan jumlah mobil yang ada dalam aplikasi kita.















