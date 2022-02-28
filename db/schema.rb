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

ActiveRecord::Schema.define(version: 2022_02_28_190538) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

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
    t.boolean "is_trash", default: false, null: false
    t.boolean "is_kitchen", null: false
    t.boolean "is_shower", null: false
    t.boolean "is_wifi", null: false
    t.boolean "is_picnic_table", null: false
    t.boolean "is_toilet", null: false
    t.boolean "is_campfire_allowed", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "lat"
    t.float "lng"
    t.string "street_address"
    t.string "state"
    t.string "city"
    t.string "zip_code"
    t.string "country"
    t.index ["host_id"], name: "index_listings_on_host_id"
  end

  create_table "reservations", force: :cascade do |t|
    t.integer "listing_id", null: false
    t.integer "total_price", null: false
    t.integer "total_price", null: false
    t.integer "guest_id", null: false
    t.string "nights", null: false
    t.date "check_in", null: false
    t.date "check_out", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["guest_id"], name: "index_reservations_on_guest_id"
    t.index ["listing_id"], name: "index_reservations_on_listing_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "author_id", null: false
    t.integer "listing_id", null: false
    t.string "description", null: false
    t.string "title", null: false
    t.boolean "recommends", null: false
    t.integer "helpful", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "helpful_authors", default: [], array: true
    t.boolean "helped"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "fname"
    t.string "lname"
    t.string "intro"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
