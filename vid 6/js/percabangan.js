if (true) {
    console.log("dijalankan jika benar");
} else {
    console.log("dijalankan jika salah");
}

if (false) {
    console.log("dijalankan jika benar");
} else {
    console.log("dijalankan jika salah");
}

// jika nilai tercapai
let nilai = 90;
let standar = 70;
let berhasil = "LULUS";
let gagal = "TIDAK LULUS";
let batasatas = 100;
let batasbawah = 0;
let peringatan = "nilai tidak valid";

if (nilai <= batasatas && nilai >= batasbawah) {
    if (nilai >= standar) {
        console.log(berhasil);
    } else {
        console.log(gagal);
    }
} else {
    console.log(peringatan);
}

// jika nilai tidak tercapai
let nil = 56;
let kkm = 70;

if (nil <= batasatas && nil >= batasbawah) {
    if (nil >= kkm) {
        console.log(berhasil);
    } else {
        console.log(gagal);
    }
} else {
    console.log(peringatan);
}

// jika nilai tidak valid
let hasil = 1000;
let batasnilai = 70;

if (hasil <= batasatas && hasil >= batasbawah) {
    if (hasil >= batasnilai) {
        console.log(berhasil);
    } else {
        console.log(gagal);
    }
} else {
    console.log(peringatan);
}
