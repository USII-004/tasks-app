import React from 'react'
import TaskList from './TaskList'
import TaskProcess from './TaskProcess'

const Editor = () => {
  const [inputValue, setInputValue] = React.useState('')
  const [listItems, setListItems] = React.useState([])

  function handleInputChange(event) {
    setInputValue(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    if(inputValue.trim() !== '') {
      setListItems([...listItems, inputValue])
      setInputValue('')
    }
  }


  return (
    <div className='max-w-[850px] mx-auto'>
      <div className='w-full h-20 bg-[#D9D9D9]'></div>
      <div className='grid grid-cols-2 gap-6 py-6 bg-[#DBEADD] px-2'>
        <TaskList />
        <TaskProcess
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          inputValue={inputValue}
          listItems={listItems}
        />
      </div>
    </div>
  )
}

export default Editor