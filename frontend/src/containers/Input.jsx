import { ShiftSelect } from "./selector/ShiftSelect"
import { YourName } from "./selector/YourName"
import React, { useState, useEffect } from "react"
import styled from 'styled-components';
import axios from "axios"
import {SHIFT_URL} from "../url/index"

export const Input = () => {
    const [shiftData, setShiftData] = useState({
        id: "1",
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setShiftData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const userId = shiftData.id;
        axios
          .put(`${SHIFT_URL}/${userId}`, shiftData) // PUTリクエストでシフトを更新
          .then(() => {
            alert("Shift updated successfully!");
          })
          .catch((error) => {
            console.error("Error updating shift:", error);
          });
      };
      console.log(shiftData)


      const Wrapper = styled.div`
        text-align: center;
      `

      const StyledButton = styled.button`
      font-size: 24px;
      border: 2px solid #ccc;
      border-radius: 8px;
      `


    return(
        <Wrapper>
          <form onSubmit={handleSubmit}>
              <YourName handleChange={handleChange}/>
              <ShiftSelect week="monday" handleChange={handleChange}/>
              <ShiftSelect week="tuesday" handleChange={handleChange}/>
              <ShiftSelect week="wednesday" handleChange={handleChange}/>
              <ShiftSelect week="thursday" handleChange={handleChange}/>
              <ShiftSelect week="friday" handleChange={handleChange}/>
              <StyledButton type="submit">提出</StyledButton>
          </form>
        </Wrapper>
    )
}