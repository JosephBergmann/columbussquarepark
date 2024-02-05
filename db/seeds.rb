# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.create!(
    email: 'demo@user.io',
    password: 'password'
)

# Image.create!(
#     url:'https://tse1.mm.bing.net/th?id=OIP.0u8ZR7XuEI6R8sco9JLPPwHaEt&pid=Api',
#     poster_id: 1
# )

# Event.create!(
#     name: 'Jamboree in the Park',
#     description: 'Jam out with Pam',
#     full: false,
#     date: Date.now,
#     time: Time.now,
#     location: '12th Street'
# )
puts "seeding database"
Event.create!(
    name: 'First Event at the new park',
    description: 'Everybody welcome',
    full: false,
    date: Date.today,
    time: Time.now,
    location: '12th Street'
)

# Event 1
Event.create!(
  name: "Morning Yoga in the Park",
  description: "Start your day with a rejuvenating yoga session at the Whole Park. All levels are welcome to join in for an hour of mindful stretching and relaxation.",
  full: false,
  date: Date.today + 1,
  time: Time.new(Time.now.year, Time.now.month, Time.now.day, 7, 0, 0),
  location: "Whole Park"
)

# Event 2
Event.create!(
  name: "Community Gardening Workshop",
  description: "Join us at the Field for a hands-on gardening workshop. Learn tips for growing your own vegetables and flowers. Get your hands dirty and enjoy the beauty of nature.",
  full: false,
  date: Date.today + 2,
  time: Time.new(Time.now.year, Time.now.month, Time.now.day, 8, 0, 0),
  location: "Field"
)

# Event 3
Event.create!(
  name: "Playground Playdate",
  description: "Bring your little ones to the Playground for a fun playdate. Connect with other parents and let the kids enjoy the swings, slides, and other play equipment.",
  full: false,
  date: Date.today + 3,
  time: Time.new(Time.now.year, Time.now.month, Time.now.day, 9, 0, 0),
  location: "Playground"
)

# Event 4
Event.create!(
  name: "Rec Center Art Exhibition",
  description: "Explore the artistic talents of our community at the Rec Center Art Exhibition. Local artists will showcase their work. Join us for an afternoon of creativity and inspiration.",
  full: false,
  date: Date.today + 4,
  time: Time.new(Time.now.year, Time.now.month, Time.now.day, 10, 0, 0),
  location: "Rec Center"
)

# Event 5
Event.create!(
  name: "Picnic and Games Day",
  description: "Pack your picnic baskets and head to the Picnic Area for a day of outdoor fun. We'll have games, music, and delicious food. Bring your friends and family for a fantastic time.",
  full: false,
  date: Date.today + 5,
  time: Time.new(Time.now.year, Time.now.month, Time.now.day, 11, 0, 0),
  location: "Picnic Area"
)

# Event 6
Event.create!(
  name: "Neighborhood Cleanup",
  description: "Join us for a neighborhood cleanup at Reed Street. Let's work together to keep our community clean and beautiful. Gloves and trash bags will be provided.",
  full: false,
  date: Date.today + 6,
  time: Time.new(Time.now.year, Time.now.month, Time.now.day, 12, 0, 0),
  location: "Reed Street"
)

# Event 7
Event.create!(
  name: "Outdoor Movie Matinee",
  description: "Enjoy a family-friendly movie under the open sky at 13th Street. Bring your blankets and snacks for a relaxing afternoon of cinema in the park.",
  full: false,
  date: Date.today + 7,
  time: Time.new(Time.now.year, Time.now.month, Time.now.day, 13, 0, 0),
  location: "13th Street"
)

# Event 8
Event.create!(
  name: "Dog Day Out",
  description: "Bring your furry friends to the Field for a dog-friendly event. There will be games, treats, and a doggy parade. It's a paw-sitively delightful day for dogs and their owners.",
  full: false,
  date: Date.today + 8,
  time: Time.new(Time.now.year, Time.now.month, Time.now.day, 15, 0, 0),
  location: "Field"
)

# Event 9
Event.create!(
  name: "Children's Storytime",
  description: "Join us at the Playground for a magical afternoon of children's storytelling. Bring your little ones and listen to enchanting tales that will spark their imagination.",
  full: false,
  date: Date.today + 9,
  time: Time.new(Time.now.year, Time.now.month, Time.now.day, 16, 0, 0),
  location: "Playground"
)

# Event 10
Event.create!(
  name: "Rec Center Fitness Class",
  description: "Get fit and have fun at the Rec Center Fitness Class. Join our certified instructor for a high-energy workout suitable for all fitness levels. Don't forget your water bottle!",
  full: false,
  date: Date.today + 10,
  time: Time.new(Time.now.year, Time.now.month, Time.now.day, 17, 0, 0),
  location: "Rec Center"
)

# Event 11
Event.create!(
  name: "Nature Photography Walk",
  description: "Explore the beauty of Reed Street through a nature photography walk. Bring your cameras and smartphones to capture the scenic views and unique wildlife in our neighborhood.",
  full: false,
  date: Date.today + 11,
  time: Time.new(Time.now.year, Time.now.month, Time.now.day, 8, 0, 0),
  location: "Reed Street"
)

# Event 12
Event.create!(
  name: "Community BBQ Bash",
  description: "Join us at the Picnic Area for a sizzling BBQ bash. We'll have grilled delights, refreshing beverages, and live music. Bring your appetite and good vibes.",
  full: false,
  date: Date.today + 12,
  time: Time.new(Time.now.year, Time.now.month, Time.now.day, 9, 0, 0),
  location: "Picnic Area"
)

# Event 13
Event.create!(
  name: "Art in the Park Workshop",
  description: "Unleash your creativity at the Whole Park with an art workshop. Supplies will be provided, so bring your artistic spirit and create wonderful masterpieces together.",
  full: false,
  date: Date.today + 13,
  time: Time.new(Time.now.year, Time.now.month, Time.now.day, 10, 0, 0),
  location: "Whole Park"
)

# Event 14
Event.create!(
  name: "Outdoor Chess Tournament",
  description: "Challenge your friends and neighbors to an outdoor chess tournament at 13th Street. Test your strategic skills and enjoy a relaxing game in the park.",
  full: false,
  date: Date.today + 14,
  time: Time.new(Time.now.year, Time.now.month, Time.now.day, 11, 0, 0),
  location: "13th Street"
)

# Event 15
Event.create!(
  name: "Family Drum Circle",
  description: "Bring your percussion instruments and join the Family Drum Circle at Reed Street. Experience the joy of making music together in a rhythmic celebration.",
  full: false,
  date: Date.today + 15,
  time: Time.new(Time.now.year, Time.now.month, Time.now.day, 12, 0, 0),
  location: "Reed Street"
)

# Event 16
Event.create!(
  name: "Sunset Picnic and Stargazing",
  description: "Pack your dinner and join us at the Field for a sunset picnic followed by stargazing. Witness the beauty of the night sky with fellow astronomy enthusiasts.",
  full: false,
  date: Date.today + 16,
  time: Time.new(Time.now.year, Time.now.month, Time.now.day, 13, 0, 0),
  location: "Field"
)

# Event 17
Event.create!(
  name: "Rec Center Cooking Class",
  description: "Discover your culinary skills at the Rec Center Cooking Class. Our chef will guide you through a hands-on cooking experience. Enjoy the delicious results!",
  full: false,
  date: Date.today + 17,
  time: Time.new(Time.now.year, Time.now.month, Time.now.day, 14, 0, 0),
  location: "Rec Center"
)

# Event 18
Event.create!(
  name: "Picnic Area Karaoke Night",
  description: "Sing your heart out at the Picnic Area Karaoke Night. Choose your favorite tunes and join the community for a night of music, laughter, and good company.",
  full: false,
  date: Date.today + 18,
  time: Time.new(Time.now.year, Time.now.month, Time.now.day, 15, 0, 0),
  location: "Picnic Area"
)

# Event 19
Event.create!(
  name: "Whole Park Fitness Bootcamp",
  description: "Challenge yourself with a fitness bootcamp at the Whole Park. Our trainer will lead you through a high-intensity workout to boost your energy and endurance.",
  full: false,
  date: Date.today + 19,
  time: Time.new(Time.now.year, Time.now.month, Time.now.day, 16, 0, 0),
  location: "Whole Park"
)

# Event 20
Event.create!(
  name: "13th Street Photography Club",
  description: "Join fellow photography enthusiasts for a photo walk at 13th Street. Capture the unique urban scenes and architectural details in our vibrant neighborhood.",
  full: false,
  date: Date.today + 20,
  time: Time.new(Time.now.year, Time.now.month, Time.now.day, 8, 0, 0),
  location: "13th Street"
)

# Event 21
Event.create!(
  name: "Reed Street Bird Watching",
  description: "Discover the bird species in our neighborhood with a bird watching event at Reed Street. Bring your binoculars and enjoy the peaceful beauty of our local birds.",
  full: false,
  date: Date.today + 21,
  time: Time.new(Time.now.year, Time.now.month, Time.now.day, 9, 0, 0),
  location: "Reed Street"
)

# Event 22
Event.create!(
  name: "Field Frisbee Tournament",
  description: "Show off your Frisbee skills at the Field Frisbee Tournament. Form teams, compete, and enjoy a day of friendly competition and outdoor fun.",
  full: false,
  date: Date.today + 22,
  time: Time.new(Time.now.year, Time.now.month, Time.now.day, 10, 0, 0),
  location: "Field"
)

# Event 23
Event.create!(
  name: "Playground Movie Night",
  description: "Bring your blankets and join us at the Playground for an outdoor movie night. We'll be screening a family-friendly film for everyone to enjoy.",
  full: false,
  date: Date.today + 23,
  time: Time.new(Time.now.year, Time.now.month, Time.now.day, 11, 0, 0),
  location: "Playground"
)

# Event 24
Event.create!(
  name: "Rec Center Board Game Marathon",
  description: "Get ready for a day of board game fun at the Rec Center. Bring your favorite board games, meet new people, and enjoy a marathon of friendly competition.",
  full: false,
  date: Date.today + 24,
  time: Time.new(Time.now.year, Time.now.month, Time.now.day, 12, 0, 0),
  location: "Rec Center"
)

# Event 25
Event.create!(
  name: "Community Volleyball Tournament",
  description: "Gather at the Whole Park for an exciting community volleyball tournament. Form your teams, compete, and enjoy a day of friendly matches and camaraderie.",
  full: false,
  date: Date.today + 25,
  time: Time.new(Time.now.year, Time.now.month, Time.now.day, 14, 0, 0),
  location: "Whole Park"
)


puts "finished seeding database"
