# PRAKTIKUM 1 Event Handler

# Langkah 1

Kita mencoba membuat tombol sederhana yang belum bisa melakukan apa-apa alias belum kita buat event handler untuk tombol tersebut. Sebagai contoh, berikut adalah sebuah tombol yang belum melakukan apa pun. Kita buat folder/file baru di src/component/button.tsx

![img](/04-event-state/img/kode%20program%20button%20no%201.PNG)

Selanjutnya pada file src/app/page.tsx kita ubah menjadi seperti berikut 

![img](/04-event-state/img/kode%20program%20page%20no%201.PNG)

Hasilnya seperti di bawah ini 

![img](/04-event-state/img/hasil%20no%201%20ini%20tombol.PNG)


# Langkah 2

Perhatikan kode button.tsx berikut

![img](/04-event-state/img/button%20langkah%202.PNG)

Jika terjadi error seperti gambar berikut

![img](/04-event-state/img/erorr%20langkah%202.PNG)

Maka kita butuh mengatur agar komponen yang kita gunakan menjadi komponen client. Untuk menjadikan komponen client, kita cukup memberikan perintah ini "use client"; pada baris pertama file page.tsx

![img](/04-event-state/img/button%20langkah%202%20biar%20tdk%20error.PNG)

Hasilnya seperti di bawah ini
![img](/04-event-state/img/hasil%20setelah%20error%20button%202.PNG)

Selain itu, sebagai alternatif, Kita juga dapat mendefinisikan event handler secara inline dalam JSX secara langsung seperti berikut

![img](/04-event-state/img/koding%20jsx.PNG)

Hasilnya seperti di bawah ini

![img](/04-event-state/img/hasil%20jsx.PNG)

# Praktikum 2

Kita buat fungsi baru pada component button.tsx

![img](/04-event-state/img/kode%20program%20button%20prakyikum%202.PNG)

Sekarang kita modifikasi file page.tsx seperti berikut

![img](/04-event-state/img/kode%20program%20page%20praktikum%202.PNG)

Hasilnya sebagai berikut

![img](/04-event-state/img/hasil%20praktikum%202.PNG)

# Praktikum 3

# Langkah 1 - Propagation

Sebagai contoh coba kita modifikasi file button.tsx seperti berikut

![img](/04-event-state/img/kode%20program%20button%20praktikum%203.PNG)

Kemudian kita modifikasi fiile page.tsx

![img](/04-event-state/img/kode%20program%20page%20praktikum%203.PNG)

# Langkah 2 - Stop Propagation

![img](/04-event-state/img/kode%20program%20button%20praktikum%203%20langkah%202.PNG)


# Praktikum 4

# Langkah 1

Kita buat file data dummy untuk mencoba state pada src/data/article.js yang berisi seperti berikut

![img](/04-event-state/img/kode%20program%20artikel%20js%20park%204%20langkah%201.PNG)

Kemudian kita coba buat komponen baru di src/component/gallery.tsx

![img](/04-event-state/img/kode%20program%20gallery%20praktikum%204%20langkah%201.PNG)

Kita panggil komponen tersebut pada page.tsx

![img](/04-event-state/img/kode%20program%20page%20praktikum%204%20langkah%201.PNG)

# Langkah 2: Menambahkan variabel state

![img](/04-event-state/img/kode%20program%20gallery%20praktikum%204%20langkah%202.PNG)

# Soal
1. Jika kita menekan tombol "Artikel Selanjutnya" sebanyak 5x (atau melebihi halaman total artikel), apa yang akan terjadi?

Yang akan terjadi ketika kita menekan tombol "Artikel Selanjutnya" maka gambar akan berubah-ubah sampai 5 kali, kemudian
ketika kita menekan tombol "Artikel Selanjutnya" untuk keenam kalinya akan menampilkan hasil erorr. Seperti gambar di bawah ini 

![img](/04-event-state/img/hasil%20error%20artikel.PNG)

2. Modifikasilah gallery.tsx agar bisa meng-handle permasalahan tersebut.

Sudah saya modifikasi, dan kode programnya menjadi seperti dibawah ini. Hasilnya akan kembali lagi ke artikel awal. Setelah gambar artikel itu selesai.

![img](/04-event-state/img/kode%20program%20modifikasi%20praktikum%204%20soal%20no%202.PNG)

Hasilnya seperti dibawah ini

![img](/04-event-state/img/modifikasi%20soal%20praktikum%204%20no%202.PNG)

3. Tambahkan tombol "Artikel Sebelumnya", untuk menampilkan artikel secara mundur.

![img](/04-event-state/img/kode%20program%20modifikasi%20artikel%201.PNG)
![img](/04-event-state/img/kode%20program%20modifikasi%20artikel%202.PNG)

Hasilnya seperti dibawah ini

![img](/04-event-state/img/hasil%20praktikum%204%20artikel%20sebelumnya.PNG)



# Praktikum 5

# Langkah 1

Kita buat komponen baru src/components/form.tsx

![img](/04-event-state/img/kode%20program%20Form%20praktikum%205.PNG)
![img](/04-event-state/img/kode%20program%20form%20praktikum%205%20kedua.PNG)
![img](/04-event-state/img/kode%20program%20form%20praktikum%205%20ketiga.PNG)

Kemudian kita tambahkan kode pada file page.tsx

![img](/04-event-state/img/kode%20program%20page%20praktikum%205.PNG)

Maka, hasilnya seperti di bawah ini

![img](/04-event-state/img/hasil%20form%20tikus.PNG)

Kemudian jika kita menjawab Form tersebut dengan jawaban Tikus, maka hasilnya

![img](/04-event-state/img/hasil%20jawaban%20benar%20tikus.PNG)

Tetapi jika kita menjawab jawaban lain, maka hasilnya seperti di bawah ini

![img](/04-event-state/img/hasil%20jawaban%20form%20tikus%20salah.PNG)


# Langkah 2

Kita tambahkan kode berikut pada src/component/form.tsx

![img](/04-event-state/img/kode%20program%20form%20praktikum%205%20langkah%202%20pertama.PNG)
![img](/04-event-state/img/kode%20program%20form%20praktikum%205%20langkah%202%20kedua.PNG)

Kemudian tambahkan ke page.tsx

![img](/04-event-state/img/kode%20program%20page%20praktikum%205%20langkah%202.PNG)

Maka hasilnya seperti di bawah ini

![img](/04-event-state/img/hasil%20praktikum%205%20langkah%202.PNG)

Coba perhatikan dan implementasikan kode berikut pada src/component/form.tsx

![img](/04-event-state/img/kode%20program%20form%20parktikum%205%20setelah%20langkah%202.PNG)

Maka hasilnya seperti di bawah ini 

![img](/04-event-state/img/hasil%20praktikum%205%20langkah%20setelah%202.PNG)

# Soal

1. Apa perbedaan dari fungsi Form_2 yang pertama dengan yang kedua?

Perbedaan antara fungsi Form_2 yang pertama dengan yang kedua terletak pada cara perhitungan nilai fullName. Dalam fungsi pertama:
Kita menggunakan sebuah state fullName untuk menyimpan dan mengupdate nilai lengkap nama, dan setiap kali nilai firstName atau lastName berubah, kita memperbarui nilai fullName menggunakan setState.Sedangkan dalam fungsi kedua: Kita tidak menggunakan state khusus untuk fullName, tetapi kita menghitung nilai fullName secara langsung dari firstName dan lastName dalam setiap render. Ini berarti setiap kali nilai firstName atau lastName berubah, fullName akan secara otomatis diupdate karena dihitung ulang di setiap render.

Jadi, perbedaan utamanya adalah dalam pendekatan pengelolaan state. Fungsi pertama menggunakan state khusus untuk fullName, sementara fungsi kedua menghitung fullName langsung tanpa menggunakan state tambahan. Dengan demikian, fungsi kedua dapat lebih ringkas dan tidak memerlukan penggunaan useState tambahan. Namun, kedua pendekatan tersebut akan berdampak pada performa dan pengelolaan memori dalam kasus yang lebih besar atau lebih kompleks.

2. Kenapa perlu menghapus state fullName? Apa keuntungannya?
Sederhana dan ringkas: Tanpa menggunakan state tambahan, kode menjadi lebih sederhana dan mudah dipahami. Tidak perlu melakukan pengelolaan tambahan terhadap state fullName.
Efisiensi: Dengan menghitung nilai fullName langsung di setiap render, kita menghindari overhead yang terkait dengan penggunaan state tambahan. Ini dapat meningkatkan efisiensi dalam kasus yang lebih besar atau saat memiliki banyak komponen yang di-render.
Performa: Dengan tidak menggunakan state tambahan, kita mengurangi jumlah perubahan state yang harus dikelola oleh React. Ini dapat meningkatkan performa aplikasi, terutama dalam aplikasi yang lebih besar atau saat memiliki banyak komponen yang saling terkait.

# Praktikum 6

# Langkah 1

Kita buat file komponen pada src/components/accordion.tsx

![img](/04-event-state/img/kode%20program%20praktikum%206%20langkah%201%20accordian%20pertama.PNG)
![img](/04-event-state/img/kode%20program%20praktikum%206%20langkah%201%20accordian%20kedua.PNG)

Tambahkan pada file page.tsx xebagai berikut

![img](/04-event-state/img/kode%20program%20page%20praktikum%206%20langkah%201.PNG)

Maka hasilnya seperti di bawah ini

![img](/04-event-state/img/hasil%20praktikum%206%20langkah%201%20pertama.PNG)

Jika kita meng-klik tampilkan pada button Etymology, maka hasilnya seperti di bawah ini 

![img](/04-event-state/img/hasil%20praktikum%206%20langkah%201%20kedua.PNG)

# Langkah 2

Kita buat file di src/components/chat.tsx

![img](/04-event-state/img/kode%20program%20chat%20pertama.PNG)
![img](/04-event-state/img/kode%20program%20chat%20kedua.PNG)
![img](/04-event-state/img/kode%20program%20chat%20ketiga.PNG)

berikut kode program page.tsx

![img](/04-event-state/img/kode%20program%20page%20praktikum%206%20langkah%202.PNG)

Maka hasilnya seperti di bawah ini 

![img](/04-event-state/img/hasil%20praktikum%206%20langkah%202.PNG)

# Soal

1. Apa tujuan dari penulisan ini key={to.email} pada < Chat key={to.email} contact={to} / > ?

dilakukan untuk memberikan identifikasi unik pada setiap contoh dari komponen tag chat. Properti key digunakan oleh React untuk membantu dalam memperbarui komponen yang dirender secara efisien, terutama saat ada perubahan dalam daftar kontak yang ditampilkan.Dalam kasus ini, kita menggunakan email sebagai nilai kunci karena setiap kontak memiliki email yang unik. Dengan menggunakan kunci yang unik seperti email, React dapat mengidentifikasi dengan tepat komponen tag chat mana yang perlu diperbarui saat ada perubahan dalam kontak yang dipilih. Ini membantu mengoptimalkan kinerja aplikasi dengan memastikan bahwa hanya komponen yang benar-benar perlu diperbarui yang akan diperbarui oleh React, sehingga menghindari pembaruan yang tidak perlu pada tampilan.

2. Apa fungsi dari props key tersebut?

 props key digunakan oleh React untuk memberikan identifikasi unik pada setiap elemen atau komponen yang dirender dalam sebuah daftar. Ini membantu React dalam mengelola dan memperbarui daftar dengan efisien, karena memungkinkan React untuk mengenali elemen atau komponen mana yang berubah, ditambahkan, atau dihapus. Dengan props key, React dapat memperbarui tampilan hanya untuk elemen atau komponen yang berubah, sehingga meningkatkan kinerja aplikasi.



