let fungsi = function (nama) {
    console.log("belajar javascript bersama " + nama);
}

fungsi("juki");

let contoh = (nama) => {
    console.log("belajar javascript bersama " + nama);
}

contoh("grey");

let tambah = function (a,b) {
    return a + b;
}

console.log(tambah(2,3));

let plus = (a,b) => a + b;

console.log(plus(5,7));

let hasil = (a) => a * 2;

console.log(hasil(4))

let coba = () => console.log("coba lagi");

coba();

let belajar = () => {
    console.log("baris pertama")
    console.log("baris kedua")
    console.log("baris ketiga")
    console.log("baris selanjutnya")
}

belajar();

let nilai = 7;

let uji = nilai <= 8 ? () => (predikat = ("GAGAL")) : () => (predikat = ("LULUS"));
console.log(uji());

let nil = 9;

let kkm = nil <= 8 ? () => (predikat = ("GAGAL")) : () => (predikat = ("LULUS"));
console.log(kkm());


