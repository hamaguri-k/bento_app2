class ShiftsController < ApplicationController
    def index
      shifts = Shift.all

      render json: {
        shifts: shifts
      }, status: :ok
    end

    def update
      shift = Shift.find(params[:id])

      if shift.nil?
        render json: { error: "Shift not found" }, status: :not_found
        return
      end
  
      # シフトデータを更新
      if shift.update(shift_params)
        render json: { message: "Shift updated successfully", shift: shift }, status: :ok
      else
        render json: { error: "Failed to update shift", details: shift.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def shift_params
      params.require(:shift).permit(:id, :monday, :tuesday, :wednesday, :thursday, :friday)
    end

    def reset_shifts
      ShiftReset.new.shift_reset
      redirect_to shifts_path, notice: 'シフトがリセットされました。'
    end

    def shift_assign
      ShiftAssigner.new.assign_shifts
      redirect_to shifts_path, notice: 'シフトが設定されました。'
    end
end