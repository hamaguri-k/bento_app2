class ShiftAssigner
    def assign_shifts
      days = %w[monday tuesday wednesday thursday friday]

      # 各曜日の該当者数をカウントし、少ない順に並び替え
      days_with_counts = days.map do |day|
        [day, Shift.where(day => true).count]
      end

      # 該当者数が少ない順に並び替え
      sorted_days = days_with_counts.sort_by { |_, count| count }.map(&:first)
    
      # 各ユーザーの割り当て回数を記録するハッシュ
        user_assignment_count = Hash.new(0)

      sorted_days.each do |day|
        available_users = Shift.where(day => true).pluck(:id)
        next if available_users.empty?
  
        # 割り当て回数が最小のユーザーを選択
        assigned_user_id = available_users.min_by { |user| user_assignment_count[user] }

        # シフトユーザーをDBに登録
        # まずはIDを登録
        shift_day = Result.find_by(day: day)
        shift_day.shift_id = assigned_user_id
        # 次に名前を登録
        shift_user = Shift.find(assigned_user_id)
        shift_day.name = shift_user.name
        shift_day.save

        # 割り当て回数を更新
        user_assignment_count[assigned_user_id] += 1
      end
    end
end