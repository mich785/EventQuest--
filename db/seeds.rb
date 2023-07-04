puts "Destroying existing data"
# Reset the sequence for the "reviews" table
ActiveRecord::Base.connection.execute("SELECT setval(pg_get_serial_sequence('reviews', 'id'), COALESCE(MAX(id), 1), false) FROM reviews")

# Reset the sequence for the "users" table
ActiveRecord::Base.connection.execute("SELECT setval(pg_get_serial_sequence('users', 'id'), COALESCE(MAX(id), 1), false) FROM users")


Review.destroy_all
User.destroy_all

puts "Seeding data..."

# db/seeds.rb

# Seed data for the users table
User.create([
  { username: 'user1', email: 'user1@example.com', password_digest: 'password1' },
  { username: 'user2', email: 'user2@example.com', password_digest: 'password2' },
  # Add more user records here if needed
])

# Seed data for the events table
Event.create([
  { name: 'Event 1', url: 'https://example.com/event1', image: 'event1.jpg' },
  { name: 'Event 2', url: 'https://example.com/event2', image: 'event2.jpg' },
  # Add more event records here if needed
])

# Seed data for the reviews table
Review.create([
  { comment: 'Great event!', user: User.first, event: Event.first },
  { comment: 'Awesome experience!', user: User.last, event: Event.last },
  # Add more review records here if needed
])

puts "Done seeding data"
