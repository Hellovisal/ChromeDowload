import React from 'react'
import "../Components/Table.css"
import p1 from "../assets/CR7.png";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
const Table = ({profile,deleteRow,editeRow}) => {
  return (
    <div>
      <div>
      {profile.map((item,idx) => {
        return(
          <div>
         <div className='Container-full' key={idx}>
        <div className='image'>
          <img src={item.imgSrc} alt="" />
        </div>
        <div className='detail'>
          <h1>{item.title}</h1>
          <h2>{item.detail}</h2>
          <span className="Action">
            <BsFillTrashFill
            className="delete-btn" 
             onClick={() => deleteRow(idx)}
            />
            <BsFillPencilFill
            onClick={() => editeRow(idx)}
              className="edit-btn"
            />
          </span>
        </div>
      </div>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Table