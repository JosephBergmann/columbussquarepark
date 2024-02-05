# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# User.create!(
#     email: 'admin@joe.com',
#     password: 'password'
# )

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

Event.create!(
    name: 'First Event at the new park',
    description: 'Everybody welcome',
    full: false,
    date: Date.today,
    time: Time.now,
    location: '12th Street'
)
