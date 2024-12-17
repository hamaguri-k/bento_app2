class ShiftReset
    def shift_reset
        persons = Shift.all
        persons.each do |person|
            days = %w[monday tuesday wednesday thursday friday]
            days.each do |day|
                    person[day] = false
            end
            person.save
        end
    end
end