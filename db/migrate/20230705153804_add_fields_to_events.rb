class AddFieldsToEvents < ActiveRecord::Migration[6.1]
  def change
    add_column :events, :country, :string
    add_column :events, :description, :text
    add_column :events, :category, :string
    add_column :events, :place, :string
  end
end
