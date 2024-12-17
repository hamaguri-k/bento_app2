import { fetchResult } from "../api/ResultApi"
import { useEffect } from "react"
import { useState } from "react"
import { dayChange } from "../method/dayChange"
import { nameChange } from "../method/nameChange"

export const Result = () => {
    const [state,setState] = useState({ results: [] });
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchResult().then(data => {
            // console.log(data)
            setState(data)
            setLoading(false);
        } );
    },[])

if (loading) {
    return <h2>Loading...</h2>;
}

return(
    <>
    {state.results.map(result => {
        console.log(result)
        
        return(
            <h2>{dayChange(result.day)}:{nameChange(result.name)}</h2>
        )
    })}
    </>
)
}