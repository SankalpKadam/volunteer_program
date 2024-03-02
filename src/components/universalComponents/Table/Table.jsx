import React from 'react'

const Table = ({
    headings, rows
}) => {
  return (
    <div className='table'>
      <table>
        <tr>
            <th>Tasks Completed</th>
            <th>Hours Worked</th>
        </tr>
        <tr>
            <td>15</td>
            <td>20</td>
        </tr>
      </table>
    </div>
  )
}

export default Table
