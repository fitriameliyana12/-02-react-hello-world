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

Praktikum 2

Kita buat fungsi baru pada component button.tsx

![img](/04-event-state/img/kode%20program%20button%20prakyikum%202.PNG)

Sekarang kita modifikasi file page.tsx seperti berikut

![img](/04-event-state/img/kode%20program%20page%20praktikum%202.PNG)

Hasilnya sebagai berikut

![img](/04-event-state/img/hasil%20praktikum%202.PNG)

Praktikum 3

Langkah 1 - Propagation