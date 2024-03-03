import React from 'react'
import './ReportViewer.css'
// import DetailedTask from '../../universalComponents/DetailedTask/DetailedTask'
const ReportViewer = () => {
  return (
    <div className='reportviewer'>
        <div className='reportviewer__img'>

      <img src={require("../../universalComponents/report1.png")} alt="" />
        </div>
        <div className='reportviewer__img'>

      <img src={require("../../universalComponents/report2.png")} alt="" />
        </div>
    </div>
  )
}

export default ReportViewer
