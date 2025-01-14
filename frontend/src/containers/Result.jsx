import { fetchResult } from "../api/ResultApi"
import { useEffect } from "react"
import { useState } from "react"
import { dayChange } from "../method/dayChange"
import styled from "styled-components"

export const Result = () => {
    const [state,setState] = useState({ results: [] });
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchResult().then(data => {
            // console.log(data)
            const sortedData = {
                ...data,
                results: data.results.sort((a, b) => a.id - b.id),
            };
            setState(sortedData)
            setLoading(false);
        } );
    },[])

if (loading) {
    return <h2>Loading...</h2>;
}

const Wrapper = styled.div`
        text-align: center;
      `

return(
    <Wrapper>
    {state.results.map(result => {
        console.log(result)
        
        return(
            <h2>{dayChange(result.day)}: {result.name}</h2>
        )
    })}
    </Wrapper>
)
}