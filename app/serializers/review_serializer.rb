class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user_id, :event_id
  belongs_to :event
end
