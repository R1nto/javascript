let btn = document.querySelectorAll(".btn-angka > button");
let tampil = document.querySelector("#tampil");

// tampil.value = btn[7];

// console.log(btn[7].innerHTML);

for (let index = 0; index < btn.length; index++) {
    btn[index].onclick = function () {
        // console.log(btn[index].innerHTML);
        tampil.value = btn[index].innerHTML;
    }
    
}
