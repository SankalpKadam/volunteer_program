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
    console.log(rows);
    linkto = "reportviewer"
  }
  // console.log(rows);
  return (
    <div className='table'>
      <div className='table__header'>
        {heading}
      </div>
      {
        rows.map((row, index) => !row.status && <Link className={clases} key={index} target={row.report_path&&'_blank'} to={row.report_path?process.env.REACT_APP_FILE_URL+row.report_path.slice(7):(heading.toLowerCase()=="task list" && `tasks/${row.id}`)}>{row.task_title ? row.task_title : row.title}{row.student_name ?row.student_name: null}</Link>)
      }
    </div>
  )
}

export default Table
