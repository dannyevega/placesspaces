class CreateDestinations < ActiveRecord::Migration
  def change
    create_table :destinations do |t|
      t.string :name
      t.boolean :visited, :default => false
      t.belongs_to :user

      t.timestamps
    end
  end
end
