# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(email: 'demo@email', password:123456, fname: 'John', lname: 'Smith')
Listing.create(name: 'testplace', description:'nice',host_id:71, cost:'60 doll',check_in_time:'2',check_out_time: '3',response_time: '6 months',on_arrival:'say hi', guests_allowed:2,minimum_night: 1, cancellation_policy:'strict',is_trash:0,is_kitchen:1,is_shower:0, is_wifi: 1, is_campfire_allowed:1, is_picnic_table:0,is_toilet:1)