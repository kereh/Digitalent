<?php

class File extends Controller
{
  protected $filename = "data.json";

  public function index()
  {
    echo file_get_contents($this->filename);
  }

  public function reload()
  {
    // ambil data dri db
    $all = $this->model("TodoModel")->semua();

    // ubah ke bntuk json
    $toJson = json_encode($all, JSON_PRETTY_PRINT);

    // simpan ke file data.json
    if (file_put_contents($this->filename, $toJson)) {
      echo "Data disimpan";
    }
  }
}
