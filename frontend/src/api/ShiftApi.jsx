import axios from "axios";
import { SHIFT_URL } from "../url";

export const fetchShift = () => {
    return axios.get(SHIFT_URL)
    .then(res => {
        console.log(res.data)
        return res.data
        
})
    .catch((e) => console.error(e))
}