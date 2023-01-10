function coba() {
    let coba = "saya belajar javascript";
    console.log(coba);
    console.log("saya belajar coding");
}

coba();

console.log("----------------");

for (i = 0; i < 2; i++) {
    coba();
}

console.log("----------------");

function persegi(panjang,lebar) {
    console.log(panjang);
    console.log(lebar);
    luas = panjang * lebar;
    console.log(luas);
}

persegi(3,5);

console.log("----------------");

function out() {
    return console.log("output yang dilihat");
}

out();

console.log("----------------");

function lingkaran(r) {
    luas = 3.14 * r * r;
    return luas;
}

console.log(lingkaran(7));

console.log("----------------");

const tinggi = 5;
let tabung = lingkaran(10) * tinggi;

console.log(tabung);

console.log("----------------");

function cuman(a) {
    return a;
}

console.log(cuman(7));