import axios from "axios";
import { SHIFT_URL } from "../url";


export const Admin = () => {

    const ShiftChange = (e) => {
        e.preventDefault();
        axios
          .post(`${SHIFT_URL}/reset_shifts`) 
          .then(() => {
            alert("シフトが正常にリセットされました！");
          })
          .catch((error) => {
            console.error("Error updating shift:", error);
          });
      };

      const ShiftAsign = (e) => {
        e.preventDefault();
        axios
          .post(`${SHIFT_URL}/shift_assign`) 
          .then(() => {
            alert("シフトが正常に設定されました！");
          })
          .catch((error) => {
            console.error("Error updating shift:", error);
          });
      }

    return(
        <div>
            <button
                onClick={ShiftChange}
            >シフトをリセットする</button>
            <button
                onClick={ShiftAsign}
            >シフトを設定する</button>
        </div>
    )
}