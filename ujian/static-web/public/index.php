<!-- Author: Ronaldo Kereh -->

<?php
// baca data dari file json
$data = file_get_contents('pokemon.json');
// format ke array asosiatif
$formated_data = json_decode($data, true);
// ambil sebagian data saja
$data_partial = array_slice($formated_data, 0, 250);
// ambil query, ternary operation
$query = isset($_GET['search']) ? $_GET['search'] : '';
// search logic emnggunakan array filter
if ($query) {
  $data_partial = array_filter($data_partial, function ($pokemon) use ($query) {

    // stripos output : 0 false
    $english = stripos($pokemon['name']['english'], $query);
    $japanese = stripos($pokemon['name']['japanese'], $query);
    $species = stripos($pokemon['species'], $query);

    // cari data yang sesuai dengan query user
    $result = $english !== false || $japanese !== false || $species !== false;
    return $result;
  });
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pokemon List</title>
  <link rel="stylesheet" href="css/output.css">
</head>

<body>

  <!-- navbar -->
  <!-- alt bg #ef5350 -->
  <nav class="sticky shadow-md top-0 left-0 bg-transparent backdrop-blur-md py-1 px-10 flex justify-between items-center z-10">
    <!-- logo -->
    <div class="relative flex items-center w-16 h-16">
      <img src="img/logo.png" alt="pokemon logo" class="object-cover relative my-auto">
    </div>
    <!-- menus -->
    <ul class="flex items-center gap-3 justify-items-end">
      <li class="cursor-pointer">
        <a href="https://pokeapi.co/" class="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
        </a>
      </li>
    </ul>
    <!-- brand atau logo -->
  </nav>
  <!-- end of navbar -->


  <!-- description -->
  <div class="w-full flex justify-center">
    <div class="py-4 px-10 text-center">
      <h1 class="text-2xl font-semibold">Pokemon List</h1>
      <p>Daftar pokemon.</p>
      <p class="text-gray-500 text-sm mt-2">* Note : data yang ditampilkan belum sepenuhnya</p>
    </div>
  </div>
  <!-- end of description -->

  <!-- search form -->
  <div class="w-full flex items-center justify-center py-4 px-10">
    <div class="w-full md:max-w-xs">
      <form method="GET" class="space-y-3">
        <input type="text" name="search" placeholder="Cari Pokemon..." value="<?= htmlspecialchars($query) ?>"
          class="w-full px-4 py-2 border border-gray-400 rounded-lg shadow-md">
        <button type="submit" class="mt-2 w-full px-4 py-2 bg-gray-700 text-white rounded-lg">Search</button>
      </form>
    </div>
  </div>
  <!-- end of search form -->

  <!-- pokemon list -->
  <div class="w-full flex justify-center items-center py-4 px-10">
    <div class="w-full">
      <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-10">
        <?php if (count($data_partial) > 0): ?>
          <?php foreach ($data_partial as $pokemon): ?>
            <div class="border rounded-lg p-4 w-full cursor-pointer shadow-lg hover:bg-gray-700 hover:text-white transition-all duration-300">
              <div class="flex justify-center items-center gap-2 mb-5">
                <div class="relative flex justify-center gap-3">
                  <img
                    src="<?= $pokemon['image']['thumbnail'] ?>"
                    alt="gambar"
                    class="object-cover relative w-15 h-15">
                </div>
                <div class="relative flex justify-center gap-3">
                  <img
                    src="<?= $pokemon['image']['sprite'] ?>"
                    alt="gambar"
                    class="object-cover relative w-14 h-14">
                </div>
              </div>
              <div class="justify-center">
                <div class="text-center">
                  <h1 class="font-semibold"><?= $pokemon['name']['english'] ?></h1>
                  <p class="text-muted text-sm"><?= $pokemon['name']['japanese'] ?></p>
                  <p><?= $pokemon['species'] ?></p>
                </div>
              </div>
              <div class="mt-5 flex justify-center">
                <table class="table-fixed w-5/6">
                  <tbody class="text-center">
                    <tr>
                      <td class="text-left">HP</td>
                      <td class="text-center">=</td>
                      <td class="text-right"><?= $pokemon['base']['HP'] ?></td>
                    </tr>
                    <tr>
                      <td class="text-left">Attack</td>
                      <td class="text-center">=</td>
                      <td class="text-right"><?= $pokemon['base']['Attack'] ?></td>
                    </tr>
                    <tr>
                      <td class="text-left">Defense</td>
                      <td class="text-center">=</td>
                      <td class="text-right"><?= $pokemon['base']['Defense'] ?></td>
                    </tr>
                    <tr>
                      <td class="text-left">Speed</td>
                      <td class="text-center">=</td>
                      <td class="text-right"><?= $pokemon['base']['Speed'] ?></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          <?php endforeach ?>
        <?php else: ?>
          <p>Data tidak ditemukan</p>
        <?php endif ?>
      </div>
    </div>
  </div>
  <!-- end of pokemon list -->

</body>

</html>