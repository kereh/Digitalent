<?php

class Database
{
  private $host = DB_HOST;
  private $user = DB_USER;
  private $pass = DB_PASS;
  private $db_name = DB_NAME;

  private $dbh;
  private $stmt;

  public function __construct()
  {
    $dsn = 'mysql:host=' . $this->host . ';dbname=' . $this->db_name;
    $options = [
      PDO::ATTR_PERSISTENT => true,
      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
    ];

    try {
      $this->dbh = new PDO($dsn, $this->user, $this->pass, $options);
    } catch (PDOException $e) {
      // Lemparkan kembali exception
      throw new Exception('Database Connection Error: ' . $e->getMessage());
    }
  }

  public function query($query)
  {
    $this->stmt = $this->dbh->prepare($query);
  }

  private function detectType($value)
  {
    switch (true) {
      case is_int($value):
        return PDO::PARAM_INT;
      case is_bool($value):
        return PDO::PARAM_BOOL;
      case is_null($value):
        return PDO::PARAM_NULL;
      default:
        return PDO::PARAM_STR;
    }
  }

  public function bind($param, $value, $type = null)
  {
    if (is_null($type)) {
      $type = $this->detectType($value);
    }

    $this->stmt->bindValue($param, $value, $type);
  }

  public function execute()
  {
    return $this->stmt->execute();
  }

  public function all()
  {
    $this->execute();
    return $this->stmt->fetchAll(PDO::FETCH_ASSOC);
  }

  public function single()
  {
    $this->execute();
    return $this->stmt->fetch(PDO::FETCH_ASSOC);
  }

  public function rowCount()
  {
    return $this->stmt->rowCount();
  }

  // Destructor untuk memastikan statement dan koneksi dihapus dengan benar
  public function __destruct()
  {
    $this->stmt = null;
    $this->dbh = null;
  }
}
