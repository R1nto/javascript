// array -> string,number,function,objek,campuran

let nilai = [
    {nama: "ibuki", bahasa: 50, ipa: 90, matematika: 80 },
    {nama: "yoru", bahasa: 20, ipa: 80, matematika: 90 },
    {nama: "yono", bahasa: 80, ipa: 70, matematika: 70 },
    {nama: "jumadi", bahasa: 90, ipa: 40, matematika: 60 },
];

let nama = ["koly","haru","gea","rio"];
let mapel = ["sejarah", "bahasa jawa", "fisika"]
// console.log(nama.concat("pkn","kimia","agama"))
// console.log(nama.concat(mapel));
// nama.push("ani","yuniar");
// nama.unshift("eja","yui");

// console.log(nama.slice(0,3))
// console.log(nama.splice(5,2));
// console.log(nama.shift());
// console.log(nama.pop());
// nama.splice(0,3);

// console.log(nilai);
// console.log(nama);

// for (let index = 0; index < nama.length; index++) {
//     console.log(nama[index]);
// }

// nama.forEach(function(a) {
//     console.log(a);
// });

// nama.forEach((a) => {console.log(a)});

// nilai.filter(function (a) {
//     if (a.ipa > 70) {
//         console.log(a);
//     }
// })

nilai.filter((a) => a.ipa > 70 && a.matematika > 70 ? console.log(a.nama) : null)