class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :url, :image
end
