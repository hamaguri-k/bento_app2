import { dayChange } from "../../method/dayChange"
export const ShiftSelect = ({week, handleChange}) => {

    return(
        <div>
            <label>
                {dayChange(week)}:
                <select name={week} onChange={handleChange} defaultValue="false">
                    {/* <option value="" disabled>
                        -- 選択してください --
                    </option> */}
                    <option value="true">可</option>
                    <option value="false">不可</option>
                </select>
            </label>
        </div>
            
    )
}