document.querySelector("#klik").addEventListener("click",tampil);
function tampil() {
  let url = "js/tblmenu.json"
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let keluar = "<h1>Data Menu</h1> <table border=1px; cellpadding=10px;> <th>Menu</th> <th>Harga</th> <th>Macam</th>"
      data.forEach(element => {
        keluar += `<tr>
        <td>${element.menu}</td>
        <td>${element.harga}</td>
        <td>${element.macam[0]}</td>
        </tr>` 
      });
      keluar += "</table>"
      document.querySelector("#isi").innerHTML = keluar;
    }) 
  
}

// let tblmenu = [
//     {
//         "idmenu" : 1,
//         "idkategori" : 1,
//         "menu" : "Bakso",
//         "harga" : 10000,
//         "macam" : ["malang","solo"],
//         "stok" : true,
//         "keterangan" : null
//     },
//     {
//         "idmenu" : 2,
//         "idkategori" : 1,
//         "menu" : "Ayam",
//         "harga" : 10000,
//         "macam" : ["goreng","bakar"],
//         "stok" : false,
//         "keterangan" : null
//     }
// ];

// console.log(tblmenu);