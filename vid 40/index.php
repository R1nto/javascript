<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>AJAX-JQUERY BOOOTSTARP PHP VID 38</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <script src="js/jquery.js"></script>
    <script src="js/app.js" defer></script>
  </head>
  <body>
    <div class="container">
      <h1 class="mt-4">Belajar Ajax Jquery Bootstrap PHP</h1>
        <div class="row mt-4">
          <div class="row">
            <div class="col-4">
                <!-- Button trigger modal -->
                <button type="button" id="btn-tambah" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Tambah Pelanggan
                </button>
            </div>
          </div>  
        <!-- <div class="col">
            <div class="row">
              <h2>Input Data Pelanggan</h2>
            </div>
            <div class="row">
              <div class="msg">
                
              </div>
            </div>
          </div> -->
          <div class="col">
            <div class="row">
              <h2>Data Pelanggan</h2>
            </div>
            <div class="row">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Alamat</th>
                    <th scope="col">Telp</th>
                    <th scope="col">Hapus</th>
                    <th scope="col">Ubah</th>
                  </tr>
                </thead>
                <tbody id="isidata">
            
                </tbody>
              </table>
            </div>
          </div>
      </div>
        
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="titel">Tambah Data</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <input type="text" hidden class="form-control" id="id" required aria-describedby="emailHelp">
                    <label class="form-label">Pelanggan</label>
                    <input type="text" class="form-control" id="pelanggan" required aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">Harus di isi</div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Alamat</label>
                    <input type="text" class="form-control" id="alamat" required>
                    <div id="emailHelp" class="form-text">Harus di isi</div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Telp</label>
                    <input type="text" class="form-control" id="telp" required>
                    <div id="emailHelp" class="form-text">Harus di isi</div>
                  </div>
                  <button type="submit" id="submit" data-bs-dismiss="modal" class="btn btn-primary">Simpan</button>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
   
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
  </body>
</html>