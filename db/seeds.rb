# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Shift.create!([
  { name: "oishi",
  monday: false,
  tuesday: false,
  wednesday: false,
  thursday: false,
  friday: false },
  { name: "Nanami",
  monday: false,
  tuesday: false,
  wednesday: false,
  thursday: false,
  friday: false },
  { name: "Ishikawa",
  monday: false,
  tuesday: false,
  wednesday: false,
  thursday: false,
  friday: false },
  { name: "Nakajima",
  monday: false,
  tuesday: false,
  wednesday: false,
  thursday: false,
  friday: false },
  { name: "Suzuki",
  monday: false,
  tuesday: false,
  wednesday: false,
  thursday: false,
  friday: false }
])
Result.create!([
    { day: "monday", name: "oishi", shift_id: 1 },
    { day: "tuesday", name: "oishi", shift_id: 1  },
    { day: "wednesday", name: "oishi", shift_id: 1  },
    { day: "thursday", name: "oishi", shift_id: 1  },
    { day: "friday", name: "oishi", shift_id: 1  }
  ])