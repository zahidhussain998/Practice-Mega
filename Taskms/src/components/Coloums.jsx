/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Task from './Task'
import { useDroppable } from '@dnd-kit/core'
import { addTask } from '../store/Kanbantore'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

function Coloums({column}) {

 

  const {isOver, setNodeRef} = useDroppable({id: column.id})




  const style  = {
    background: isOver ? 'lightgreen' : 'white',
    padding: '1rem',
    margin: '1rem',
    minWidth: '250px',
    minHeight: '250'
  }
  
  return (
    
    <div ref={setNodeRef} style={style} className="w-full h-auto border-2 p-1 m-4 rounded-2xl">
      
      <Task tasks={column.tasks} column={column} />
    </div>
  )
}

export default Coloums