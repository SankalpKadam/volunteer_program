import React from 'react'
import DetailedTask from '../../universalComponents/DetailedTask/DetailedTask'

const TaskDetailViewer = () => {
  return (
    <div className='taskdetailviewer' style={{"overflow":"hidden"}}>
      <DetailedTask/>
    </div>
  )
}

export default TaskDetailViewer
