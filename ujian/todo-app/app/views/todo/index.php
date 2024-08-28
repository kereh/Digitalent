<div>
  <h3 class="text-center">Todo App</h3>
  <div class="card shadow mt-4">
    <div class="card-body">
      <a class="btn btn-primary btn-sm mb-3 w-auto" role="button" href="<?= URL ?>/todo/tambah">tambah data</a>
      <a class="btn btn-secondary btn-sm mb-3 w-auto" role="button" href="<?= URL ?>/file">json</a>
      <table class="table table-striped table-hover w-100">
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <?php foreach ($data['todos'] as $todo) : ?>
            <tr>
              <td class="text-center align-middle"><?= $todo['task'] ?></td>
              <td class="text-center align-middle">
                <?php if ($todo['isComplete']): ?>
                  <span class="badge text-success">Sudah Selesai</span>
                <?php else: ?>
                  <span class="badge text-danger">Belum Selesai</span>
                <?php endif; ?>
              </td>
              <td class="d-flex gap-2">
                <a href="<?= URL ?>/todo/hapus/<?= $todo['id'] ?>" class="btn btn-danger btn-sm">
                  hapus
                </a>
                <a href="<?= URL ?>/todo/edit/<?= $todo['id'] ?>" class="btn btn-primary btn-sm">
                  edit
                </a>
              </td>
            </tr>
          <?php endforeach; ?>
        </tbody>
      </table>
    </div>
  </div>
</div>