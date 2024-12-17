import { dayChange } from "../../method/dayChange"
export const ShiftSelect = ({week, handleChange}) => {

    return(
        <div>
            <label>
                {dayChange(week)}:
                <select name={week} onChange={handleChange}>
                    <option value="true">可</option>
                    <option value="false">不可</option>
                </select>
            </label>
        </div>
            
    )
}