<?php

class notfound extends Controller
{
  public function index()
  {
    $this->view("templates/header", ['title' => '404']);
    $this->view("error/404");
    $this->view("templates/footer");
  }
}
