import React from 'react';

const TaskList = (props) => {
  const taskElements = props.tasks.map((task) => (
    <div key={task.id}>
      <div
        className='m-2 w-full bg-[#C4DCD3] py-3 rounded-md px-4 flex cursor-pointer'
        onClick={() => props.setCurrentTaskId(task.id)}
      >
        <h2>{task.body.split('\n')[1]}</h2>
      </div>
    </div>
  ));

  return (
    <div className=''>
      <h3 className='font-bold text-3xl px-10'>Tasks</h3>
      {taskElements}
      <div className='flex justify-center items-center mt-4'>
        <button
          onClick={props.newTask}
          className='w-[100px] p-4 bg-[#C4DCD3] rounded-md'
        >
          Add a task
        </button>
      </div>
    </div>
  );
};

export default TaskList;
