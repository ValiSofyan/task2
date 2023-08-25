// STRING
// MANIPULASI STRING
// 1. Buatlah variable dengan "nama" lalu isi dengan nama lengkap anda 
// 2. Hitung panjang nama anda menggunakan metode length
// 3. Ubah semua huruf dalam nama Anda menjadi huruf besar dan tampung di variable
// 4. Ubah semua huruf dalam nama Anda menjadi huruf besar dan tampung di variable
// 5. Ambil huruf pertama dari variable "nama"
// 6. Ambil potongan nama anda, misalnya nama pertama anda
// 7. Gabungkan potongan nama anda dengan string "Love Javascript"
// 9. Print huruf terakhir dari variable "name"
// 8. Tampilkan hasil akhir dengan console.log

let name = "Ade vali Sofyan";
let leng = name.length
let upper = name.toUpperCase();
let low = name.toLowerCase();
let love ="Love Javasscript"

console.log(leng);
console.log(upper);
console.log(low);
console.log(name.slice(0,1));
console.log(name.slice(0,3));
console.log(name+" "+love);
console.log(name.slice(-1));


// MENGUBAH TIPE DATA
// 1. Buat variabel dengan nama umur dan isi dengan umur Anda dalam bentuk string
// 2. Ubah variabel umur menjadi tipe data number
// 3. Buat variabel dengan nama tinggi dan isi dengan tinggi Anda dalam bentuk string
// 4. Ubah variabel tinggi menjadi tipe data float
let name1 = "Ade Vali Sofyan"
let Age = "18"
let height = "175"

console.log(parseInt(Age));
console.log(parseFloat(height));


// PENGECEKAN TIPE DATA
// 1. Buat variabel dengan nama data dan isi dengan nilai apapun (string, number, boolean, dll.)
// 2. Print tipe data dari variabel data
let akuganteng = true;
console.log(typeof(akuganteng));

// NUMBER
// PENJUMLAHAN DAN PENGURANGAN
// 1. Buatlah sebuah variabel num1 dengan nilai 10 dan variabel num2 dengan nilai 5.
// 2. Hitung hasil penjumlahan dan pengurangan dari kedua angka tersebut.
// 3. Tampilkan hasil penjumlahan dan pengurangan dengan console.log.
let num1 = 10;
let num2 = 5;
console.log(num1+num2);
console.log(num1-num2);


// PERKALIAN DAN PEBAGIAN
// 1. Buatlah sebuah variabel num3 dengan nilai 6 dan variabel num4 dengan nilai 2.
// 2. Hitung hasil perkalian dan pembagian dari kedua angka tersebut.
// 3. Tampilkan hasil perkalian dan pembagian dengan console.log.
let num3 = 6;
let num4 = 2;
console.log(num3*num4);
console.log(num3/num4);

// PANGKAT BILANGAN
// 1. Buatlah sebuah variabel base dengan nilai 3 dan variabel exponent dengan nilai 4.
// 2. Hitung hasil dari pangkat base dipangkatkan exponent.
// 3. Tampilkan hasil pangkat dengan console.log.
let bulat=3;
let exp= 4;
console.log(bulat**exp);

// RATA-RATA DARI ARRAY
// 1. Buatlah sebuah array numbers yang berisi angka-angka: [5, 8, 12, 4, 6].
// 2. Hitung rata-rata dari angka-angka di dalam array.
// 3. Tampilkan hasil rata-rata dengan console.log.
let arr= [5, 8, 12, 4, 6];
let avg= arr.reduce((a,b)=> a+b)/arr.length;
console.log(avg);

// BILANGAN GANJIL ATAU GENAP
// 1. Buatlah sebuah variabel num dengan nilai 7.
// 2. Gunakan kondisi if untuk mengecek apakah bilangan tersebut ganjil atau genap.
// 3. Tampilkan pesan yang sesuai dengan kondisi dengan console.log.
let numb = 7;
if (numb %2==0 ) {
    console.log("ini genap ya");
    
} else {
    console.log("ini ganjil ya");
    
}


// RANDOM
// 1. BUATKAN ANGKA RANDOM 1 SAMPAI 5
let a = Math.floor(Math.random()*5)+1;
let b ="asdfsad"
console.log(a);
