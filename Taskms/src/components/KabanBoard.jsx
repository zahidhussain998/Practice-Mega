import React, { useState } from "react";
import Coloums from "./Coloums";
import { DndContext } from "@dnd-kit/core";
import { Droppable } from "./Droppable";
import { useDispatch, useSelector } from "react-redux";
import { addColumn, moveTask } from "../store/Kanbantore";
import Container from "./container/Container";
import { GoX } from "react-icons/go";
import room from '../../public/room.png'
function KabanBoard() {
  const [coloumsTitle, setColumnsTitle] = useState("");

  const dispatch = useDispatch();

  const [showInput, setShowInput] = useState(false);

  const handleColumn = () => {
    dispatch(addColumn(coloumsTitle));
    setColumnsTitle("");
    setShowInput(false);
  };

  const columns = useSelector((state) => state.MainTodo.columns);

  const handledDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    // finding the source column id
    const sourceColumnId = findColumnIdByTaskId(active.id);// draggable id
    const destinationColumnId = over.id;// droppable id
   

    dispatch(
      moveTask({
        sourceColumnId,
        destinationColumnId,
        taskId: active.id,
        
      })
    );
  };



  //helper function given a task id , find the column that contains it
  const findColumnIdByTaskId = (taskId) => {
    for (const column of columns) {
      if (column.tasks.some((task) => task.id === taskId)) {
        return column.id;
      }
    }
    return null;
  };

  return (
    <Container>
      {!showInput ? (
       <div className="relative mt-10">
       {/* Bear Container */}
       <div className="relative w-64 h-36 bg-cover bg-center"
            style={{ backgroundImage: `url(${room})` }}>
         
         {/* Button */}
         <button
           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/5
              rounded-md py-5
             text-lg font-semibold hover:text-yellow-900 active:scale-95 transition"
           onClick={() => setShowInput(true)}
         >
           Add Column
         </button>
       </div>
     </div>
      ) : (
          <div>
          <input
            type="text"
            required
            value={coloumsTitle}
            onChange={(e) => setColumnsTitle(e.target.value)}
            placeholder="Enter Column Name"
            className="w-72 border-2 shadow-orange-800 rounded-lg p-1 mb-2 mt-3 text-xs py-4"
            />
            <div>

          <button
            type="button"
            onClick={handleColumn}
            className="rounded-lg py-1 px-4 font-medium mr-2 space-y-6 border-2 bg-black text-white text-sm  "
            >
            Add
          </button>
           <button onClick={() => setShowInput(false)}>
                        <GoX />
                      </button>
            </div>
        </div>
      )}

      <div></div>
      <div className="flex justify-between items-center md:flex-row lg:flex-row sm:flex-col w-32 rounded-3xl">
        <DndContext onDragEnd={handledDragEnd}>
          {columns.map((column) => (
            
            <Coloums key={column.id} column={column} />
          ))}
        </DndContext>
      </div>
    </Container>
  );
}


export default KabanBoard;
