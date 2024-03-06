# PRAKTIKUM 1 Event Handler

Langkah 1

Kita mencoba membuat tombol sederhana yang belum bisa melakukan apa-apa alias belum kita buat event handler untuk tombol tersebut. Sebagai contoh, berikut adalah sebuah tombol yang belum melakukan apa pun. Kita buat folder/file baru di src/component/button.tsx

![img](/04-event-state/img/kode%20program%20button%20no%201.PNG)

Selanjutnya pada file src/app/page.tsx kita ubah menjadi seperti berikut 

![img](/04-event-state/img/kode%20program%20page%20no%201.PNG)

Hasilnya seperti di bawah ini 

![img](/04-event-state/img/hasil%20no%201%20ini%20tombol.PNG)


Langkah 2

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

Langkah 1 - Propagation

Sebagai contoh coba kita modifikasi file button.tsx seperti berikut

![img](/04-event-state/img/kode%20program%20button%20praktikum%203.PNG)

Kemudian kita modifikasi fiile page.tsx

![img](/04-event-state/img/kode%20program%20page%20praktikum%203.PNG)

Langkah 2 - Stop Propagation

![img](/04-event-state/img/kode%20program%20button%20praktikum%203%20langkah%202.PNG)


# Praktikum 4

Langkah 1

Kita buat file data dummy untuk mencoba state pada src/data/article.js yang berisi seperti berikut

![img](/04-event-state/img/kode%20program%20artikel%20js%20park%204%20langkah%201.PNG)

Kemudian kita coba buat komponen baru di src/component/gallery.tsx

![img](/04-event-state/img/kode%20program%20gallery%20praktikum%204%20langkah%201.PNG)

Kita panggil komponen tersebut pada page.tsx

![img](/04-event-state/img/kode%20program%20page%20praktikum%204%20langkah%201.PNG)

Langkah 2: Menambahkan variabel state

![img](/04-event-state/img/kode%20program%20gallery%20praktikum%204%20langkah%202.PNG)

# Praktikum 5

Langkah 1

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


Langkah 2

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



