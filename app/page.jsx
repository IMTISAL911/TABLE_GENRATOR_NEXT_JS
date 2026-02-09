"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNumber , generateTable } from "./redux/tableSlice";

export default function Home() {
  
  const dispatch = useDispatch();
  const{ number , table} = useSelector((state)=>state.table)


  
  return(
    <div className=" flex justify-center flex-col items-center">
      <h1 className="mt-[3%] font-sans font-bold text-2xl">TABLE GENRATOR</h1>

      <div className=" flex gap-4">
      <input 
      className="border-2 px-4 py-2  mt-[1%]" 
      type="text" 
      placeholder=" enter the num" 
      value={number}
      onChange={(e)=>dispatch(setNumber(e.target.value))}
      style={{ padding: "8px", fontSize: "16px", width: "150px" }}

      />
      <button onClick={() => dispatch(generateTable())} className="bg-blue-600 rounded-lg px-4 py-1 cursor-pointer">GENRATE</button>
 </div>
       <div style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold",  }}>
           
           
           {table.map((line,index)=>(
            <div key={index}> {line} </div>
           ))}
               
           
           

       </div>

    </div>
  )
}