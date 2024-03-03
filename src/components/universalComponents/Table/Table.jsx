import React from 'react'
import './Table.css'
import { Link } from 'react-router-dom'
const Table = ({heading, rows}) => {
  let linkto = "";
  let clases = "table__data "
  const nodecoration = {"text-decoration":"none"}
  if (heading.toLowerCase()=="students"){
    linkto=""
    clases="nodecoration__tableData"
  }
  else if(heading.toLowerCase()=="task list"){
    linkto="detailed"
  }
  else{
    linkto = "reportviewer"
  }
  return (
    <div className='table'>
      <div className='table__header'>
        {heading}
      </div>
      {
        rows.map((row, index) => !row.status && <Link className={clases} key={index} to={linkto}>{row.title ? row.title : row}</Link>)
      }
    </div>
  )
}

export default Table
