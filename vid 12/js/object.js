let objek = {
    nama : "Rinto",
    telp : 123456789,

    buah : ["apel","jeruk","mangga"],

    coba : function () {
        return "coba saja anjay"
    },

    boleh : true,

    "tulis aja" : 12340000,
}

console.log(objek.nama);
console.log(objek.telp);
console.log(objek.buah[0]);
console.log(objek.coba());
console.log(objek.boleh);
console.log(objek["tulis aja"])