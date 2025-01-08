# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Shift.create!([
  { name: "大石",
  monday: false,
  tuesday: false,
  wednesday: false,
  thursday: false,
  friday: false },
  { name: "大井",
  monday: false,
  tuesday: false,
  wednesday: false,
  thursday: false,
  friday: false },
  { name: "鈴木",
  monday: false,
  tuesday: false,
  wednesday: false,
  thursday: false,
  friday: false },
  { name: "中嶋",
  monday: false,
  tuesday: false,
  wednesday: false,
  thursday: false,
  friday: false }
])
Result.create!([
    { day: "monday", name: "大石", shift_id: 1 },
    { day: "tuesday", name: "大石", shift_id: 1  },
    { day: "wednesday", name: "大石", shift_id: 1  },
    { day: "thursday", name: "大石", shift_id: 1  },
    { day: "friday", name: "大石", shift_id: 1  }
  ])