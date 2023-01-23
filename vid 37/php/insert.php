<?php 
    
    require_once "koneksi.php";

    $data = stripslashes(file_get_contents("php://input"));
    $datapelanggan = json_decode($data, true);

    $pelanggan = $datapelanggan['pelanggan'];
    $alamat = $datapelanggan['alamat'];
    $telp = $datapelanggan['telp'];



    if (!empty($pelanggan) && !empty($alamat) && !empty($telp)) {
        $sql = "INSERT INTO tblpelanggan VALUES('','$pelanggan','$alamat','$telp','','','')"; // ditambah 3 dikarenakan di phpmyadmin saya ada tambahan 3 kolom
            if ($result = mysqli_query($con,$sql)) {
                echo "data tersimpan!!";
            } else {
                echo "data tidak tersimpan!!";
            }
    } else {
        echo "data tidak diterima";
    }
    
    
    
    

?>