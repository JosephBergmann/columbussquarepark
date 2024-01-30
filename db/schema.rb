# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2024_01_30_070847) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "events", force: :cascade do |t|
    t.string "name", null: false
    t.string "description"
    t.boolean "full", null: false
    t.date "date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "organizer_id"
    t.index ["description"], name: "index_events_on_description"
    t.index ["full"], name: "index_events_on_full"
    t.index ["name"], name: "index_events_on_name"
    t.index ["organizer_id"], name: "index_events_on_organizer_id"
  end

  create_table "images", force: :cascade do |t|
    t.string "url", null: false
    t.text "alttext"
    t.bigint "poster_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["poster_id"], name: "index_images_on_poster_id"
  end

  create_table "organizers", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "phone"
    t.string "organization"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_organizers_on_email"
    t.index ["name"], name: "index_organizers_on_name"
  end

  create_table "users", force: :cascade do |t|
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "events", "organizers"
  add_foreign_key "images", "users", column: "poster_id"
end
