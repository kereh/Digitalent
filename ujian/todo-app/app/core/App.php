<?php

class App
{

  protected $controller = "todo";
  protected $method = "index";
  protected $params = [];

  public function __construct()
  {
    $url = $this->ambilUrl();

    // cek controller
    if (isset($url[0]) && file_exists("../app/controllers/$url[0].php")) {
      $this->controller = $url[0];
      unset($url[0]);
    } else if (isset($url[0]) and !file_exists("../app/controllers/$url[0].php")) {
      // echo "not found";
      $this->controller = "notfound";
    }

    // load controller
    require_once "../app/controllers/" . $this->controller . ".php";

    // buat instance controller
    $this->controller = new $this->controller;

    // cek method
    if (isset($url[1])) {
      if (method_exists($this->controller, $url[1])) {
        $this->method = $url[1];
        unset($url[1]);
      }
    }

    // cek params
    if (!empty($url)) {
      $this->params = $url;
    }

    call_user_func_array([$this->controller, $this->method], $this->params);
  }

  public function ambilUrl()
  {
    $ambilUrl = $_SERVER["REQUEST_URI"];
    $abaikanQuery = parse_url($ambilUrl, PHP_URL_PATH);
    $abaikanIndex = str_replace("/index.php", "", $abaikanQuery);
    $bersihkanUrl = filter_var($abaikanIndex, FILTER_SANITIZE_URL);
    $hapusKarakter = rtrim($bersihkanUrl, "/");
    $pisahkanUrl = explode("/", $hapusKarakter);
    $parsedUrl = array_slice($pisahkanUrl, 1);

    return $parsedUrl;
  }
}
