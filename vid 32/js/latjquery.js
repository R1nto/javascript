$(document).ready(function () {
    console.log("anjayy");
});

$(function () {
    $("#isi").html("<h1>Belajar Jquery</h1>")
    $("#klik").click(function (e) { 
        e.preventDefault();
        alert("belajar javascript");
    });
    $("#isi").mouseleave(function () { 
        alert("mouse leave");
        console.log("mouse");
    });
});