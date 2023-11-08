import React from 'react';

const TaskProcess = (props) => {
  return (
    <div className=''>
      <h3 className='font-bold text-3xl px-10'>Descriptions</h3>
      <form onSubmit={props.handleSubmit}>
        <input
          type='text'
          value={props.currentTask.body}
          onChange={props.handleInputChange}
          className='my-2 mr-4 w-full py-3 rounded-md px-2 h-[50px]'
        />
      </form>
      <ol onChange={props.updateTask}>
        {props.listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default TaskProcess;
