import axios from "axios";
import { RESULT_URL } from "../url";
// const RESULT_URL = "http://localhost:3000/results"

export const fetchResult = () => {
    return axios.get(RESULT_URL)
    .then(res => {
        // console.log(res.data)
        return res.data
        
})
    .catch((e) => console.error(e))
}