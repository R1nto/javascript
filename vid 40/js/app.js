$(document).ready(function () {
    let id = "";
    let pelanggan = "";
    let alamat = "";
    let telp = "";
    $("#submit").click(function (e) { 
        e.preventDefault();
        id = $("#id").val();
        pelanggan = $("#pelanggan").val();
        alamat = $("#alamat").val();
        telp = $("#telp").val();

        if (id == "") {
            inserttData();
        } else { 
            updateData();
        }

        $("#id").val("");
        $("#pelanggan").val("");
        $("#alamat").val("");
        $("#telp").val("");
        
    });

    $("#btn-tambah").click(function (e) { 
        e.preventDefault();
        
        $("#titel").html("Tambah Data");

        $("#id").val("");
        $("#pelanggan").val("");
        $("#alamat").val("");
        $("#telp").val("");
        
    });

    $("tbody").on("click", ".btn-del" ,function () {
        let id = $(this).attr("data-id");
        if (confirm("Yakin Akan Menghapusnya ?")) {
            deleteData(id); 
        }
        
    });

    $("tbody").on("click", ".btn-ubah" ,function () {
        let id = $(this).attr("data-id");
        $("#titel").html("Ubah Data");
        selectUpdate(id);
    });

    function selectUpdate(id) {
        let idpelanggan = {
            idpelanggan : id
        }
        $.ajax({
            type: "post",
            url: "php/selectupdate.php",
            cache: false,
            data: JSON.stringify(idpelanggan),
            success: function (response) {
                let data = JSON.parse(response)
                        
                $("#id").val(data.idpelanggan);
                $("#pelanggan").val(data.pelanggan);
                $("#alamat").val(data.alamat);
                $("#telp").val(data.telp);

            }
        });

    }

    function selectData() {
        $.ajax({
            type: "get",
            url: "php/select.php",
            dataType: "json",
            success: function (response) {
                let out = "";
                let no=1;
                $.each(response, function (key, val) { 
                    out += `<tr>
                        <td>${no++}</td>
                        <td>${val.pelanggan}</td>
                        <td>${val.alamat}</td>
                        <td>${val.telp}</td>
                        <td><button type="button" class="btn btn-danger btn-del" data-id = ${val.idpelanggan} >DEL</button></td>
                        <td><button type="button" class="btn btn-warning btn-ubah" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id = ${val.idpelanggan} >UBAH</button></td>
                    </tr>`
                });
                $("#isidata").html(out);
            }
        });
    }
    function inserttData() {
        let datapelanggan = {
            pelanggan : pelanggan,
            alamat : alamat,
            telp : telp
        }
        $.ajax({
            type: "post",
            url: "php/insert.php",
            cache: false,
            data: JSON.stringify(datapelanggan),
            success: function (response) {
                let out = `<p>${response}</p>`
                $(".msg").html(out);
            }
        });

        selectData();
    }
    function deleteData(id) {
        let idpelanggan = {
            idpelanggan : id
        }
        $.ajax({
            type: "post",
            url: "php/delete.php",
            cache: false,
            data: JSON.stringify(idpelanggan),
            success: function (response) {
                let out = `<p>${response}</p>`
                $(".msg").html(out);
            }
        });

        selectData();
    }
    function updateData() {
        let datapelanggan = {
            idpelanggan : id,
            pelanggan : pelanggan,
            alamat : alamat,
            telp : telp
        }
        $.ajax({
            type: "post",
            url: "php/update.php",
            cache: false,
            data: JSON.stringify(datapelanggan),
            success: function (response) {
                let out = `<p>${response}</p>`
                $(".msg").html(out);
            }
        });

        selectData();
    }

    selectData();
});