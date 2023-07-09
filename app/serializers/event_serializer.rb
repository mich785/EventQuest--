class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :country, :category, :place
end
