import { createSlice, nanoid, } from "@reduxjs/toolkit";


const initialState = {
    columns: [],
  };


 export const Todo = createSlice({
    name: 'MainTodo',
    initialState,
    reducers:{

      addColumn: (state, action) => {
        const newColumn = {
          id:nanoid(),
          title: action.payload,
          tasks: []
        };
        state.columns.push(newColumn);
      },

        addTask: (state, action) => {
            const { columnId, task } = action.payload;
            const column = state.columns.find((col) => col.id === columnId);
            if (column) {
              column.tasks.push(task);
            }
          },

          moveTask: (state, action) => {
            const { sourceColumnId, destinationColumnId, taskId } = action.payload;
            if (sourceColumnId === destinationColumnId) return;
      
            const sourceColumn = state.columns.find(col => col.id === sourceColumnId);
            const destinationColumn = state.columns.find(col => col.id === destinationColumnId);
            
            const taskIndex = sourceColumn.tasks.findIndex(task => task.id === taskId);
      
            const [taskToMove] = sourceColumn.tasks.splice(taskIndex, 1);
            destinationColumn.tasks.push(taskToMove);
          }
        
       
           
           
        
        }
    

 })

 export const { addTask, addColumn, moveTask} = Todo.actions
 export default Todo.reducer