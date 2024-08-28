<?php

class Todo extends Controller
{
  public function index()
  {
    $todos = $this->model("TodoModel")->semua();

    $this->view("templates/header", ['title' => 'Todo App']);
    $this->view("todo/index", ['todos' => $todos]);
    $this->view("templates/footer");
  }

  public function tambah()
  {
    $this->view("templates/header", ['title' => 'Tambah data']);
    $this->view("todo/tambah");
    $this->view("templates/footer");
  }

  public function simpan()
  {
    $data = $this->model("TodoModel")->tambah($_POST);
    if ($data > 0) {
      header("Location: " . URL . "/");
      exit;
    }
  }

  public function hapus($id)
  {
    $data = $this->model("TodoModel")->hapus($id);
    if ($data > 0) {
      header("Location: " . URL . "/");
      exit;
    }
  }

  public function edit($id = null)
  {
    $todo = $this->model("TodoModel")->todo($id);

    if ($todo == null) {
      $this->view("templates/header", ['title' => 'Task tidak ditemukan']);
      $this->view("error/404");
      $this->view("templates/footer");
    }

    $this->view("templates/header", ['title' => 'Detail']);
    $this->view("todo/edit", ['todo' => $todo]);
    $this->view("templates/footer");
  }

  public function editTodo($id)
  {
    $data = $this->model("TodoModel")->edit($id, $_POST);
    if ($data > 0) {
      header("Location: " . URL . "/");
      exit;
    }
  }
}
