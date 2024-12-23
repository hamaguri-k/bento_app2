import { StyledLabel,StyledSelect } from "./Mycss"


export const YourName = ({handleChange}) => {

    return(
        <div>
            <StyledLabel>
                <StyledSelect name="id" onChange={handleChange}>
                    <option value="1">大石</option>
                    <option value="2">中山</option>
                    <option value="3">石河</option>
                    <option value="4">中嶋</option>
                    <option value="5">鈴木</option>
                </StyledSelect>
            </StyledLabel>
        </div>
    )
}