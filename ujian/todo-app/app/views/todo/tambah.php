<div class="card">
  <div class="card-body">
    <div class="card-title">
      <h4>Tambah Data</h4>
    </div>
    <form action="<?= URL ?>/todo/simpan" method="post">
      <div class="d-flex flex-column gap-4 mb-5">
        <div>
          <label>Task</label>
          <input type="text" class="mt-2 form-control" placeholder="Masukan task" name="task" required>
        </div>
        <div>
          <label>Status</label>
          <select class="mt-2 form-select" aria-label="Pilih Status" name="isComplete" required>
            <option selected>Status</option>
            <option value="0">Belum Selesai</option>
            <option value="1">Sudah Selesai</option>
          </select>
        </div>
      </div>
      <div class="d-flex gap-3">
        <button class="btn btn-success w-auto" type="submit">Simpan</button>
        <a role="button" class="btn btn-danger w-auto" href="<?= URL ?>/">Batalkan</a>
      </div>
    </form>
  </div>
</div>