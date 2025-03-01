/* eslint-disable react/prop-types */
import { useState } from "react";
import { Draggable } from "./Draggable";
import { useDispatch } from "react-redux";
import { addTask } from "../store/Kanbantore";
import { nanoid } from "@reduxjs/toolkit";

import { GoKebabHorizontal, GoPlus, GoX } from "react-icons/go";

function Task({ tasks, column }) {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  return (
    <div className="">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-sm font-extrabold">{column.title}</h1>
        <GoKebabHorizontal className="cursor-pointer text-gray-500" />
      </div>

      {/* Task List Container */}
      <div className="flex flex-col gap-2 overflow-y-auto max-h-28 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
        {tasks?.map((task) => (
          <Draggable key={task.id} id={task.id} data={task}>
            <div className="border-2 rounded-xl text-sm shadow-md px-4 py-2 bg-gray-100">
              <h3 className="text-xs">{task.title}</h3>
            </div>
          </Draggable>
        ))}
      </div>

      {/* Add Card Button */}
      {!open && (
        <div className="flex items-center space-x-1 mt-2 cursor-pointer" onClick={() => setOpen(true)}>
          <button className="py-2 text-xs text-blue-600">Add Card</button>
          <GoPlus className="text-blue-600" />
        </div>
      )}

      {/* Add Task Input */}
      {open && (
        <div className="mt-3">
          <input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            type="text"
            placeholder="Enter the Task"
            className="w-full border-2 rounded-lg p-2 text-xs"
          />
          <div className="flex items-center mt-2 space-x-2">
            <button
              className="rounded-lg py-1 px-4 font-medium border-2 bg-black text-white text-sm"
              onClick={() => {
                if (inputValue.trim()) {
                  dispatch(
                    addTask({
                      columnId: column.id,
                      task: { id: nanoid(), title: inputValue },
                    })
                  );
                  setInputValue("");
                }
              }}
            >
              Add Card
            </button>
            <button onClick={() => setOpen(false)} className="text-gray-500">
              <GoX />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Task;
