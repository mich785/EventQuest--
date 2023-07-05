class RemoveUrlAndImageFromEvents < ActiveRecord::Migration[6.1]
  def change
    remove_column :events, :url, :string
    remove_column :events, :image, :string
  end
end
