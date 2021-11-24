# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_11_24_063924) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "listings", force: :cascade do |t|
    t.integer "host_id", null: false
    t.string "name", null: false
    t.string "description", null: false
    t.string "cost", null: false
    t.string "check_in_time", null: false
    t.string "check_out_time", null: false
    t.string "response_time", null: false
    t.string "on_arrival", null: false
    t.integer "guests_allowed", null: false
    t.integer "minimum_night", null: false
    t.string "cancellation_policy", null: false
    t.string "booking_time", null: false
    t.boolean "is_fishing"
    t.boolean "is_swimming"
    t.boolean "is_hiking"
    t.boolean "is_paddling"
    t.boolean "is_wildlife"
    t.boolean "is_trash", null: false
    t.boolean "is_kitchen", null: false
    t.boolean "is_shower", null: false
    t.boolean "is_wifi", null: false
    t.boolean "is_picnic_table", null: false
    t.boolean "is_toilet", null: false
    t.boolean "is_campfire_allowed", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["host_id"], name: "index_listings_on_host_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "fname"
    t.string "lname"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
