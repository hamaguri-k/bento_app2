import { dayChange } from "../../method/dayChange"
import styled from "styled-components"
import { StyledLabel,StyledSelect } from "./Mycss"

export const ShiftSelect = ({week, handleChange}) => {

    return(
        <div>
            <StyledLabel>
                {dayChange(week)}:
                <StyledSelect name={week} onChange={handleChange} defaultValue="false">
                    {/* <option value="" disabled>
                        -- 選択してください --
                    </option> */}
                    <option value="true">可</option>
                    <option value="false">不可</option>
                </StyledSelect>
            </StyledLabel>
        </div>
            
    )
}