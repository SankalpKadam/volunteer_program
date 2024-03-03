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
        rows.map((row, index)=>!row.status&&<Link className='table__data' key={index} to={row.link?row.link:"/professorhome/tasks"}>{row.title?row.title:row}</Link>)
      }
    </div>
  )
}

export default Table
