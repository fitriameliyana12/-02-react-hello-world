Nama    : Fitria Meliyana

Nim     : 2341727002
 
Kelas   : TI-4J

# 1 : Cara Install Laravel 9

1. Cek apakah Composer berhasil terinstall

![img](/07-laravel9-nexjs/img/cek%20composer.PNG)

2. Install Laravel 9

![img](/07-laravel9-nexjs/img/prak%201%20install%20laravel%209.PNG)

3. Menjalankan Project

![img](/07-laravel9-nexjs/img/prak%201%20langkah%202%20php%20artisan.PNG)

![img](/07-laravel9-nexjs/img/prak%201%20langkah%202%20localhost%208000.PNG)

4. Konfigurasi Koneksi Database

Buka file .env

![img](/07-laravel9-nexjs/img/prak%201%20langkah%203%20ganti%20.env.PNG)

5. Membuat Database

![img](/07-laravel9-nexjs/img/prak%201%20langkah%204%20database.PNG)

6. Membuat Model dan Migration

![img](/07-laravel9-nexjs/img/prak%201%20langkah%205%20migration.PNG)

Silahkan buka file database/migration/tanggal terbaru kita buat foldernya

![img](/07-laravel9-nexjs/img/prak%201%20langkah%205%20ganti%20migration.PNG)

7. Menjalankan Migration

![img](/07-laravel9-nexjs/img/prak%201%20langkah%206%20php%20artisan%20migrate.PNG)

![img](/07-laravel9-nexjs/img/prak%201%20langkah%206%20hasil%20migrate%20database.PNG)

8. Menambahkan Mass Assigment

Buka file app/Models/Post.php ubah kodenya

![img](/07-laravel9-nexjs/img/prak%201%20langkah%207%20ganti%20post.PNG)

9. Menjalankan Storage Link

![img](/07-laravel9-nexjs/img/prak%201%20langkah%208%20storage%20link.PNG)

![img](/07-laravel9-nexjs/img/prak%201%20langkah%208%20hasil%20storage%20link.PNG)

# 2 : Membuat API Resources

1. Membuat API Resources

![img](/07-laravel9-nexjs/img/prak%202%20langkah%201%20resource%20postresource.PNG)

2. Melakukan Custom API Resources

Silahkan buka app/Http/Resources/PostResource.php

![img](/07-laravel9-nexjs/img/prak%202%20langkah%202%20pertama.PNG)

![img](/07-laravel9-nexjs/img/prak%202%20langkah%202%20kedua.PNG)

#3 : Menampilkan Data dari Database

1. Membuat Controller

![img](/07-laravel9-nexjs/img/prak%203%20langkah%201%20membuat%20controller.PNG)

Buka dan ubah file app/http/Controllers/Api

![img](/07-laravel9-nexjs/img/prak%203%20langkah%201%20postcontroller.PNG)

2. Membuat Route Api Resource

Buka dan ubah file routes/api.php

![img](/07-laravel9-nexjs/img/prak%203%20langkah%202%20route%20api.PNG)

Untuk memastikan route berhasil diinstall, silahkan jalankan perintah dibawah ini

![img](/07-laravel9-nexjs/img/prak%203%20langkah%202%20routes%20list.PNG)

3. Uji Coba Rest API

Masukkan URL http://localhost:8000/api/posts dan pilih GET untuk method-nya

![img](/07-laravel9-nexjs/img/prak%203%20langkah%203.PNG)

# 4 : Insert Data ke Database

1. Menambahkan Method Store

Buka dan ubah file app/Http/Controllers/Api/PostController.php

![img](/07-laravel9-nexjs/img/prak%204%20langkah%201%20pertama.PNG)

![img](/07-laravel9-nexjs/img/prak%204%20langkah%201%20kedua.PNG)

![img](/07-laravel9-nexjs/img/prak%204%20langkah%201%20ketiga.PNG)

2. Uji Coba Rest API

Masukkan URL http://localhost:8000/api/posts dan pilih method POST

![img](/07-laravel9-nexjs/img/prak%204%20langkah%202.PNG)

![img](/07-laravel9-nexjs/img/prak%204%20langkah%202%20form%20body.PNG)

# 5 : Menampilkan Detail Data

1. Menambahkan Method Show

Buka dan ubah file app/Http/Controllers/Api/PostController.php

![img](/07-laravel9-nexjs/img/prak%205%20langkah%201.PNG)

2. Uji Coba Rest API

Masukkan URL http://localhost:8000/api/posts/1 dan pilih method GET

![img](/07-laravel9-nexjs/img/prak%205%20langkah%202.PNG)

# 6 : Update Data ke Database

1. Menambahkan Method Update

Buka dan ubah file app/Http/Controllers/Api/PostController.php

![img](/07-laravel9-nexjs/img/prak%206%20langkah%201%20a.PNG)

![img](/07-laravel9-nexjs/img/prak%206%20langkah%201%20b.PNG)

2. Uji Coba Rest API

Masukkan URL http://localhost:8000/api/posts/1 dan pilih POST unuk method-nya.

![img](/07-laravel9-nexjs/img/prak%206%20langkah%202.PNG)

# 7 : Delete Data dari Database

1. Menambahkan Method Destroy

Buka dan ubah file app/Http/Controllers/Api/PostController.php

![img](/07-laravel9-nexjs/img/prak%207%20langkah%201.PNG)

2. Uji Coba Rest API

Masukkan URL http://localhost:8000/api/posts/1 dan pilih method DELETE

![img](/07-laravel9-nexjs/img/prak%207%20langkah%202.PNG)












