import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskProcess from './TaskProcess';
import { nanoid } from 'nanoid';

const Editor = () => {
  const [inputValue, setInputValue] = useState('');
  const [listItems, setListItems] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [currentTaskId, setCurrentTaskId] = useState('');

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (inputValue.trim() !== '') {
      setListItems([...listItems, inputValue]);
      setInputValue('');
    }
  }

  function createNewTask() {
    const newTask = {
      id: nanoid(),
      body: 'Input here',
    };
    setTasks((prevItems) => [...prevItems, newTask]);
    setCurrentTaskId(newTask.id);
  }

  function updateTask() {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === currentTaskId ? { ...task, body: inputValue } : task
      )
    );
  }

  function findCurrentTask() {
    return tasks.find((task) => task.id === currentTaskId) || tasks[0];
  }

  return (
    <div className='max-w-[850px] mx-auto'>
      {tasks.length > 0 ? (
        <div>
          <div className='w-full h-20 bg-[#D9D9D9]'></div>
          <div className='grid grid-cols-2 gap-6 py-6 bg-[#DBEADD] px-2'>
            <TaskList
              tasks={tasks}
              currentTask={findCurrentTask()}
              setCurrentTaskId={setCurrentTaskId}
              newTask={createNewTask}
            />
            <TaskProcess
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              updateTask={updateTask}
              listItems={listItems}
              currentTask={findCurrentTask()}  
            />
          </div>
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center w-full h-full bg-white'>
          <h1>You have no notes</h1>
          <button
            className='rounded-[3px] p-4 cursor-pointer bg-[#4A4E74] text-white'
            onClick={createNewTask}
          >
            Create one now
          </button>
        </div>
      )}
    </div>
  );
};

export default Editor;
