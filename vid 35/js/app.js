$(document).ready(function () {
    function selectData() {
        $.ajax({
            type: "get",
            url: "php/select.php",
            dataType: "json",
            success: function (response) {
                // console.log(response);
                let out = "";
                let no=1;
                $.each(response, function (key, val) { 
                    // console.log(val.pelanggan);
                    out += `<tr>
                        <td>${no++}</td>
                        <td>${val.pelanggan}</td>
                        <td>${val.alamat}</td>
                        <td>${val.telp}</td>
                    </tr>`
                });
                $("#isidata").html(out);
            }
        });
    }
    function inputtData() {
        alert("input");
    }
    function deleteData() {
        alert("delete");
    }
    function updateData() {
        alert("update");
    }

    selectData();
});