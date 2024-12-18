import axios from "axios";


export const Admin = () => {

    const ShiftChange = (e) => {
        e.preventDefault();
        axios
          .post(`http://localhost:3000/shifts/reset_shifts`) 
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
          .post(`http://localhost:3000/shifts/shift_assign`) 
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