import React from 'react'

const TaskList = () => {
  return (
    <div className=''>
        <h3 className='font-bold text-3xl px-10'>Tasks</h3>
        <div className='m-2 w-full bg-[#C4DCD3] py-3 rounded-md px-4 flex'>
          <p>Task 1</p>
        </div>
        <div className='flex justify-center items-center mt-4'>
          <button className='w-[100px] p-4 bg-[#C4DCD3] rounded-md'>add a task</button>
        </div>
      </div>
  )
}

export default TaskList