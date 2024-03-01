Soal 1.
Ubah isi kode Home() sehingga dapat tampil seperti berikut dengan memanfaatkan komponen Profile() yang tadi sudah dibuat dari langkah 1 tersebut! Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana Anda solve error tersebut?.

![img](/03-belajar-komponen/my-app/img/ilmuwan.PNG)

untuk menangani error tersebut kita harus menambahi file next.config.js. Berikut kode programnya
![img](/03-belajar-komponen/my-app/img/kode%20program%20next%20js.PNG)
dan menambahkan kode program di bawah ini untuk file page.tsx
![img](/03-belajar-komponen/my-app/img/kode%20program%20page.PNG)


Soal 2
Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?
Hasilnya seperti gambar di bawah ini.
![img](/03-belajar-komponen/my-app/img/kode%20program%20galery.PNG)

maka hasil akhirnya gambar pertama akan mengalami penurunan seperti pada gambar diatas. atau terjadi mengecil ukuran kolom tersebut.


Soal 3
Silakan perbaiki kode JSX berikut ini. Anda boleh menggunakan konverter atau perbaiki secara manual.Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan mengapa error itu bisa terjadi?
Berikut kode program setelah diperbaiki.
![img](/03-belajar-komponen/my-app/img/kode%20program%20no%203.PNG)

Error terjadi karena kurang kode program. seperti kurang tanda <> setelah return. Kemudian untuk tag div class nya kurang kata name, jadi className. Begitu juga dengan tag p, classnya kurang name. Lalu untuk tag b harusnya setelah kata ilmuwan. sehingga jika sudah di benarkan maka hasilnya akan seperti pada gambar di bawah ini.
![img](/03-belajar-komponen/my-app/img/jawaban%20nomer%203.PNG)


Soal 4
Kode di atas masih terdapat error, silakan diperbaiki.
Berikut kode program setelah di perbaiki. Menambahkan name pada person.
![img](/03-belajar-komponen/my-app/img/kode%20program%20no%204.PNG)

Maka hasilnya seperti di bawah ini 
![img](/03-belajar-komponen/my-app/img/jawaban%20nomer%204.PNG)

Soal 5
Buka file src/components/todolist.tsx lakukan ekstrak URL gambar ke dalam objek person.
Capture hasilnya dan buatlah laporan di README.md. Apakah ada perbedaan pada tampilan web saat ini?
Berikut hasil gambarnya.
![img](/03-belajar-komponen/my-app/img/jawaban%20nomer%205.PNG)


Soal 6
Perbaiki kode tersebut pada bagian atribut src. Kode lainnya dapat Anda sesuaikan dari jawaban soal sebelumnya. Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?

Kode program yang diperbaiki akan menjadi seperti di bawah ini.
![img](/03-belajar-komponen/my-app/img/kode%20program%20no%206.PNG)

Terdapat penambahan kode program yaitu dolar($) pada src. Dan hasil dari kode program diatas adalah.
untuk imagesize atau ukuran s, hasilnya di bawah ini.
![img](/03-belajar-komponen/my-app/img/jawaban%20nomer%206%20ukuran%20s.PNG)

sedangkan untuk imagesize atau ukuran b, maka hasilnya seperti di bawah ini.
![img](/03-belajar-komponen/my-app/img/jawaban%20nomer%206%20ukuran%20b.PNG)


Soal 7
Jika kode di atas terdapat error, silakan diperbaiki.
Komponen MyGallery ini berisi dua markup yang sama persis. Ekstraklah menjadi komponen MyProfile untuk mengurangi duplikasi. Anda perlu memilih props apa saja yang akan dikirimkan.
sCapture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?
Berikut kode program setelah di perbaiki
![img](/03-belajar-komponen/my-app/img/kode%20program%20no%207.PNG)

yaitu membuat folder utils dan file utils.tsx. Kemudian untuk import @ nya diganti menjadi ".."

dan hasil kode program diatas adalah 
![img](/03-belajar-komponen/my-app/img/jawaban%20nomer%207.PNG)


Soal 8
Jika kode di atas terdapat error, silakan diperbaiki.

Ubahlah komponen MyAvatar untuk diolah ukuran gambarnya berdasarkan prop size. Khususnya, jika size kurang dari 90, kirimkan 's' ("small") bukan 'b' ("big") pada fungsi getImageUrl. Pastikan bahwa perubahan yang Anda buat berjalan dengan cara me-render avatars dengan nilai prop size yang berbeda dan buka gambar pada tab baru di browser.

Capture hasilnya dan buatlah laporan di README.md. Jelaskan apa yang telah Anda pelajari dan bagaimana tampilannya saat ini?
Berikut kode programnya
![img](/03-belajar-komponen/my-app/img/kode%20program%20no%208.PNG)

Hasilnya seperti di bawah ini

![img](/03-belajar-komponen/my-app/img/jawaban%20nomer%208.PNG)












