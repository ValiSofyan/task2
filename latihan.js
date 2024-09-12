// STRING
console.log("==============string==============");

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
console.log("==============mengubah tipe data==============");
let name1 = "Ade Vali Sofyan"
let Age = "18"
let height = "175"

console.log(parseInt(Age));
console.log(parseFloat(height));


// PENGECEKAN TIPE DATA
console.log("==============pengecekan tipe data==============");

let akuganteng = true;
console.log(typeof(akuganteng));

// NUMBER
// PENJUMLAHAN DAN PENGURANGAN
console.log("==============penjumlahan dan pengurangan==============");
let num1 = 10;
let num2 = 5;
console.log(num1+num2);
console.log(num1-num2);


// PERKALIAN DAN PEBAGIAN
console.log("==============perkalian dan pembagian==============");
let num3 = 6;
let num4 = 2;
console.log(num3*num4);
console.log(num3/num4);

// PANGKAT BILANGAN
console.log("==============pangkat bilangan==============");

let bulat=3;
let exp= 4;
console.log(bulat**exp);

// RATA-RATA DARI ARRAY
console.log("==============rata rata array==============");

let arr= [5, 8, 12, 4, 6];
let avg= arr.reduce((a,b)=> a+b)/arr.length;
console.log(avg);

// BILANGAN GANJIL ATAU GENAP
console.log("==============bilangan ganjil genap==============");
let numb = 7;
if (numb %2==0 ) {
    console.log("ini genap ya");
    
} else {
    console.log("ini ganjil ya");
    
}


// RANDOM
console.log("==============random==============");
let a = Math.floor(Math.random()*5)+1;
console.log(a);
