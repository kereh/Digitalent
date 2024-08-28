<?php

class TodoModel
{

  private $table = "tb_todos";
  private $db;

  public function __construct()
  {
    $this->db = new Database;
  }

  public function semua()
  {
    $this->db->query("SELECT * FROM $this->table;");
    return $this->db->all();
  }

  public function tambah($data)
  {
    $query = "INSERT INTO $this->table (task, isComplete) VALUES (:task, :isComplete);";

    $this->db->query($query);
    $this->db->bind("task", $data["task"]);
    $this->db->bind("isComplete", $data["isComplete"]);
    $this->db->execute();

    return $this->db->rowCount();
  }

  public function hapus($data)
  {
    $query = "DELETE FROM $this->table WHERE id = :id";

    $this->db->query($query);
    $this->db->bind("id", $data);
    $this->db->execute();

    return $this->db->rowCount();
  }

  public function edit($id, $data)
  {
    $query = "UPDATE $this->table SET task = :task, isComplete = :isComplete WHERE id = :id";

    $this->db->query($query);
    $this->db->bind("id", $id);
    $this->db->bind("task", $data["task"]);
    $this->db->bind("isComplete", $data["isComplete"]);
    $this->db->execute();

    return $this->db->rowCount();
  }

  public function todo($id)
  {
    $query = "SELECT * FROM $this->table WHERE id = :id";

    $this->db->query($query);
    $this->db->bind("id", $id);

    return $this->db->single();
  }
}
