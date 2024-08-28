<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Coba Page</title>
</head>

<body>
  <p>Normal Looping</p>
  <?php for ($i = 1; $i < 10; $i++) {
    echo "Looping ke $i\n" . "<br/>";
  } ?>

  <p>Array Looping</p>
  <?php foreach ($data['mahasiswa'] as $mhs) {
    echo "Mahasiswa $mhs" . "<br/>";
  } ?>

  <p>Soal 1</p>
  <?php

  $harga = 2550000;
  $jumlah = 2;
  $bayar = $harga * $jumlah;

  if ($bayar <= 500000 or $bayar <= 1000000) {
    $diskon = $harga * 0.05;
    $total_bayar = $bayar - $diskon;
    echo "Total $jumlah, harga barang $bayar (diskon 5%) (bayar $total_bayar)" . "<br/>";
  } else if ($bayar >= 1000000 or $bayar <= 5000000) {
    $diskon = $harga * 0.10;
    $total_bayar = $bayar - $diskon;
    echo "Total $jumlah, harga barang $bayar diskon 10% (bayar $total_bayar)" . "<br/>";
  } else if ($bayar >= 5000000) {
    $diskon = $harga * 0.15;
    $total_bayar = $bayar - $diskon;
    echo "Total $jumlah, harga barang $bayar diskon 15% (bayar $total_bayar)" . "<br/>";
  } else {
    $diskon = $harga * 0.0;
    $total_bayar = $bayar - $diskon;
    echo "TOtal $jumlah, harga $bayar diskon 0% (bayar $total_bayar)" . "<br/>";
  }

  ?>
</body>

</html>