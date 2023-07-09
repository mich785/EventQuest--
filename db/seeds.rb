puts "Destroying existing data"
Review.destroy_all
User.destroy_all


# Reset the sequence for the "reviews" table
ActiveRecord::Base.connection.execute("SELECT setval(pg_get_serial_sequence('reviews', 'id'), COALESCE(MAX(id), 1), false) FROM reviews")

# Reset the sequence for the "users" table
ActiveRecord::Base.connection.execute("SELECT setval(pg_get_serial_sequence('users', 'id'), COALESCE(MAX(id), 1), false) FROM users")

# Reset the sequence for the "events" table
# ActiveRecord::Base.connection.execute("SELECT setval(pg_get_serial_sequence('events', 'id'), COALESCE(MAX(id), 1), false) FROM events")

puts "Seeding data..."

require 'net/http'
require 'json'

url = URI.parse("https://api.predicthq.com/v1/events/?category=sports&country=UG&updated.undefined=2023-07-09")
authorization_token = 'huaBV1i2PDR4BEQy2k6a1Ed501uwAabqWISCswkW'


http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true

request = Net::HTTP::Get.new(url.request_uri)
request['Authorization'] = "Bearer #{authorization_token}"

response = http.request(request)

if response.code == "200"
  data = JSON.parse(response.body)
  
  if data["count"] > 0
    event_data = data["results"]
    event_data.each do |event|
      entities = event["entities"]
      if entities && entities.length > 0
        place = entities[0]["formatted_address"]
        Event.create(
          name: event["title"],
          country: event["country"],
          description: event["start"],
          category: event["category"],
          place: place
        )
      end
    end
  
  else
    puts "No events found in the API response"
  end
else
  puts "Failed to connect to the API "
end

# Seed data for the users table
User.create([
  { username: 'user1', email: 'user1@example.com', password_digest: 'password1' },
  { username: 'user2', email: 'user2@example.com', password_digest: 'password2' },
  
])

# Seed data for the reviews table
Review.create([
  { comment: 'Great event!', user: User.first, event: Event.last },
  { comment: 'Awesome experience!', user: User.last, event: Event.last },
  # Add more review records here if needed
])

puts "Done seeding data"
