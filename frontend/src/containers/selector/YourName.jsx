import { StyledLabel,StyledSelect } from "./Mycss"
import React, { useState } from 'react';

export const YourName = ({handleChange}) => {
    const [selectedValue, setSelectedValue] = useState("1");  // 初期値1
    const handleSelectChange = (e) => {
        setSelectedValue(e.target.value);  // 状態更新
        handleChange(e);  // 親コンポーネントにも反映
      };
    return(
        <div>
            <StyledLabel>
                <StyledSelect name="id" value={selectedValue} onChange={handleSelectChange}>
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