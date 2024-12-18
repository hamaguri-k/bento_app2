# Use this file to easily define all of your cron jobs.
#
# It's helpful, but not entirely necessary to understand cron before proceeding.
# http://en.wikipedia.org/wiki/Cron

# Example:
#
# set :output, "/path/to/my/cron_log.log"
#
# every 2.hours do
#   command "/usr/bin/some_great_command"
#   runner "MyModel.some_method"
#   rake "some:great:rake:task"
# end
#
# every 4.days do
#   runner "AnotherModel.prune_old_records"
# end

# Learn more: http://github.com/javan/whenever


set :output, "log/cron_log.log" # ログ出力ファイル
set :environment, "production" # 実行するRails環境 (production推奨)

every :saturday, at: '11:00 am' do
  runner "ShiftReset.new.shift_reset"
end

every :sunday, at: '8:00 pm' do
    runner "ShiftAssigner.new.assign_shifts"
end