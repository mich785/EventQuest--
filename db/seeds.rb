# db/seeds.rb

# Create an array of user attributes
user_attributes = [
  { username: 'user1', email: 'user1@example.com',  password_digest: ' password_digest1' },
  { username: 'user2', email: 'user2@example.com',  password_digest: ' password_digest2' },
  { username: 'user3', email: 'user3@example.com',  password_digest: ' password_digest3' },
  # Add more users as needed
]

# Iterate over the user attributes and create users
user_attributes.each do |attributes|
  User.create(attributes)
end
