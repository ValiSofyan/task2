// //    1. Soal Latihan Topic 3 jadikan function beserta parameter agar menjadi dinamis
// // MENGUBAH TIPE DATA
console.log("==============mengubah tipe data==============");

let name1 = "Ade Vali Sofyan"
let Age = "18"
let height = "175"

function bio(name1,Age,height) {
    let hbio = name1 +" "+ "umur =" +parseInt(Age)+" " + "tinggi ="+ parseFloat(height)+"cm"
    return hbio
}
console.log(bio(name1,Age,height));


// // PENGECEKAN TIPE DATA
console.log("==============pengecekan tipe data==============");

let akuganteng = true;
// console.log(typeof(akuganteng));
function ganteng(akuganteng) {
    let gantengkuadrat = typeof(akuganteng)
    return gantengkuadrat
    
} console.log(ganteng(akuganteng));

// // PENJUMLAHAN DAN PENGURANGAN
console.log("==============penjumlahan dan pengurangan==============");

let num1 = 10;
let num2 = 5;
function plusMinus(num1,num2) {
    let plus = num1 +num2;
    let minus = num1-num2
    let rePlusMinus = "hasil penjumlahan = "+ plus + " hasil pengurangan = "+ minus
    return rePlusMinus
} console.log(plusMinus(num1,num2));

// // PERKALIAN DAN PEBAGIAN
console.log("==============perkalian dan pembagian==============");
let num3 = 6;
let num4 = 2;
function kaliBagi(num3,num4) {
    let kali = num1 *num2;
    let bagi = num1/num2
    let kaliBagi = "hasil perkalian = "+ kali + " hasil pembagian = "+ bagi
    return kaliBagi
} console.log(kaliBagi(num3,num4));


// 2. Konversi Celsius ke Fahrenheit: Buatlah sebuah fungsi yang menerima satu parameter berupa suhu dalam Celsius dan mengembalikan suhu dalam Fahrenheit. (Rumus: Fahrenheit = (Celsius * 9/5) + 32)
let celcius = 45
function temperatur (celcius) {
    let Fahrenheit =(celcius *( 9/5)) + 32
    return Fahrenheit
} 
console.log(temperatur(celcius));
//  * 3. Pangkat Sederhana: Buatlah sebuah function yang menerima dua parameter: base (angka dasar) dan exponent (pangkat). Fungsi ini akan mengembalikan hasil dari base dipangkatkan exponent.
let base = 8
let exp = 4
function result (base,exp) {
    let result1 = base ** exp ;
    return result1 
    
}

console.log(result(base,exp));

//  * 4. Cek Huruf Vokal: Buatlah sebuah fungsi yang menerima satu parameter berupa huruf (string dengan panjang 1) dan mengembalikan "Vokal" jika huruf adalah vokal dan "Bukan Vokal" jika huruf bukan vokal.
// let vocal =[a,i,u,e,o]

