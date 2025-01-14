import { StyledLabel,StyledSelect } from "./Mycss"
import React, { useState, useEffect} from 'react';
import {fetchShift} from "../../api/ShiftApi"

export const YourName = ({handleChange}) => {
    const [selectedValue, setSelectedValue] = useState("1");  // 初期値1
    const handleSelectChange = (e) => {
        setSelectedValue(e.target.value);  // 状態更新
        handleChange(e);  // 親コンポーネントにも反映
      };
    const [shifts, setShifts] = useState({ shifts: [] });
    useEffect(() => {
        fetchShift().then(data => {
            const sortedData = {
                ...data,
                shifts: data.shifts.sort((a, b) => a.id - b.id),
            };
            setShifts(sortedData)
        } );
    },[])
    return(
        <div>
            <StyledLabel>
                <StyledSelect name="id" value={selectedValue} onChange={handleSelectChange}>
                    {shifts.shifts.map(shift => {
                        return(
                            <option value={shift.id}>{shift.name}</option>
                        )
                    })}
                </StyledSelect>
            </StyledLabel>
        </div>
    )
}