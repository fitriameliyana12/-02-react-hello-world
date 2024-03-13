# Praktikum 1: Membuat routing sederhana

1. Persiapkan project dengan memanfaatkan template repository yang telah dipersiapkan di alamat https://github.com/dhanifudin/routing-demo dan gunakan tombol Use this template kemudian pilih Create a new repository.

![img](/routing-demo-main/img/hasil%20clone%20praktikum%201.PNG)

2. Clone project ke lokal laptop anda dan lakukan instalasi dependencies dengan menjalankan perintah berikut.

![img](/routing-demo-main/img/npm%20install%20praktikum%201.PNG)

3. Routing di ReactJS dengan NextJS memanfaatkan organisasi penamaan folder dan file pada folder app. Silahkan tambahkan file page.tsx di dalam folder app, dan buatlah komponen dengan kode berikut.

![img](/routing-demo-main/img/page%20tsx%20praktikum%201.PNG)

4. Jalankan project dengan menggunakan perintah npm run dev di terminal VSCode. Dan silahkan buka browser pada alamat url http://localhost:3000

![img](/routing-demo-main/img/hasil%20npm%20run%20dev%20praktikum%201.PNG)

5. Untuk membuat halaman routing /about dengan NextJS, silahkan buat folder /about dalam /app dan buat file dengan nama page.tsx. Kemudian buat function komponen seperti pada kode berikut.

Kode program page.tsx dalam folder about

![img](/routing-demo-main/img/kode%20program%20page%20tsx%20folder%20about%20prak%201.PNG)

Hasilnya 

![img](/routing-demo-main/img/hasil%20welcome%20about%20asli%20prak%201.PNG)

Todo: Buatlah halaman /profile yang menampilkan isi biodata anda dengan menggunakan routing di NextJS.

Kode program Profile.tsx

![img](/routing-demo-main/img/kode%20program%20profile.tsx%20praktikum%201.PNG)

Hasilnya

![img](/routing-demo-main/img/hasil%20profile%20asli%20prak%201.PNG)

# Praktikum 2: Membuat routing bersarang (Nested Routing)

1. Dengan menggunakan konsep yang sama pada Praktikum 1, silahkan tambahkan susunan folder /blogs/first dan /blogs/second. Kemudian tambahkan masing-masing untuk setiap folder dengan file page.tsx.

![img](/routing-demo-main/img/macam-macam%20folder%20praktikum%202.PNG)

2. Pada file /blogs/page.tsx buatlah function component seperti kode berikut atau anda dapat mengkreasikan tampilan dengan selera anda!

![img](/routing-demo-main/img/kode%20program%20blogs%20prak%202%20asli.PNG)

![img](/routing-demo-main/img/hasil%20kode%20program%20blogs%20prak%202%20asli.PNG)

3. Pada file /blogs/first/page.tsx buatlah function component seperti berikut:

![img](/routing-demo-main/img/kode%20program%20page%20foler%20first%20prak%202.PNG)

![img](/routing-demo-main/img/hasil%20first%20blog%20prak%202.PNG)

4. Pada file /blogs/second/page.tsx buatlah function component seperti berikut:

![img](/routing-demo-main/img/kode%20program%20page%20folder%20second%20prak%202.PNG)

![img](/routing-demo-main/img/hasil%20kode%20program%20second%20blogs.PNG)

Pertanyaan: Apa kekurangan yang mungkin terjadi jika menggunakan pendekatan pada Praktikum 2 untuk menangani routing?

Struktur bersarang dapat mempengaruhi kinerja sistem, terutama jika jumlah rute atau tingkat kedalaman nested routing menjadi sangat besar. Hal ini dapat menyebabkan kinerja aplikasi menjadi lambat atau tidak efisien.



# Praktikum 3: Membuat routing dinamis (Dynamic Routing)

1. Buatlah file /products/page.tsx yang berisi function component untuk menampilkan list dari products seperti kode berikut.

![img](/routing-demo-main/img/kode%20program%20praktikum%203%20langkah%201.PNG)

![img](/routing-demo-main/img/hasil%20praktikum%203%20langkah%201.PNG)

2. Kemudian buatlah file page.tsx pada lokasi /app/products/[productId] dan tambahkan kode sebagai berikut.

![img](/routing-demo-main/img/kode%20program%20praktikum%203%20langkah%203.PNG)

Cobalah akses halaman /products dan /products/1 pada browser anda. Ubah nilai productId dengan nilai lainnya.

![img](/routing-demo-main/img/hasil%20details%20products1%20praktikum%203.PNG)

Todo 1: Perbaiki implementasi Praktikum 2 menggunakan Dynamic Routes

![img](/routing-demo-main/img/kode%20program%20blogsID%20todo%20praktikum%203.PNG)
![img](/routing-demo-main/img/hasil%20todo%201%20praktikum%203.PNG)

Todo 2: Dengan menggunakan konsep Nested Routes dan Dynamic Routes, buatlah halaman dengan routing /products/[productId]/reviews/[reviewId]

![img](/routing-demo-main/img/kode%20program%20reviews%20todo2%20baru.PNG)
![img](/routing-demo-main/img/hasil%20todo%202%20reviews%20baru.PNG)

# Praktikum 4: Navigasi dengan Link Component

1. Pada file /app/page.tsx tambahkan import Link komponen seperti kode berikut.

![img](/routing-demo-main/img/import%20link%20praktikum%204%20langkah%201.PNG)

2. Tambahkan penggunaan Link komponen untuk mengakses halaman /profile dan /about

![img](/routing-demo-main/img/kode%20program%20page%20tsx%20praktikum%204.PNG)

Coba buka browser anda dan cobalah untuk bernavigasi menggunakan Link komponen.

![img](/routing-demo-main/img/hasil%20praktikum%204.PNG)

Todo: Tambahkan link yang sebelumnya anda telah kerjakan!

![img](/routing-demo-main/img/kode%20program%20page%20tambahan%20todo%20praktikum%204.PNG)

![img](/routing-demo-main/img/hasil%20todo%20terakhir%20praktikum%204.PNG)



















