import { fetchShift } from "../api/ShiftApi"
import { useState, useEffect } from "react"
import { booleanChange } from "../method/booleanChange"
import styled from "styled-components"

export const List = () => {
    const [state,setState] = useState({ shifts: [] });
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchShift().then(data => {
            // console.log(data)
            setState(data)
            setLoading(false);
        } );
    },[])

if (loading) {
    return <h2>Loading...</h2>;
}


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTable = styled.table`
  margin: auto;  /* テーブルを中央寄せ */
`;

return(
    <Wrapper>
        <StyledTable border="1">
            <thead>
                <tr>
                    <th>名前</th>
                    <th>月</th>
                    <th>火</th>
                    <th>水</th>
                    <th>木</th>
                    <th>金</th>
                </tr>
            </thead>
            <tbody>
        {state.shifts.map(shift => {
            console.log(shift)
            
            return(
                
                    <tr key={shift.id}>
                        <td>{shift.name}</td> 
                        <td align="center">{booleanChange(shift.monday)}</td>
                        <td align="center">{booleanChange(shift.tuesday)}</td>
                        <td align="center">{booleanChange(shift.wednesday)}</td>
                        <td align="center">{booleanChange(shift.thursday)}</td>
                        <td align="center">{booleanChange(shift.friday)}</td>
                    </tr>
                
            )
        })}
            </tbody>
        </StyledTable>
    </Wrapper>
)
}