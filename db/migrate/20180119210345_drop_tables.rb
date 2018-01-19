class DropTables < ActiveRecord::Migration[5.0]
  def up
    drop_table :contacts
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
