import React from 'react'
import './Table.css'
import { Link } from 'react-router-dom'
const Table = ({
    heading, rows
}) => {
  return (
    <div className='table'>
      <div className='table__header'>
        {heading}
      </div>
      {
        rows.map((row, index)=>!row.status&&<Link className='table__data' key={index} to="tasks">{row.title}</Link>)
      }
    </div>
  )
}

export default Table
