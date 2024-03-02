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
        rows.map((row, index)=><Link className='table__data' key={index} to="tasklist">{row}</Link>)
      }
    </div>
  )
}

export default Table
