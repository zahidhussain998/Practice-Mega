/* eslint-disable react/prop-types */
import { useState } from "react";
import { Draggable } from "./Draggable";
import { useDispatch,} from "react-redux";
import { addTask } from "../store/Kanbantore";
import { nanoid } from "@reduxjs/toolkit";

import { GoKebabHorizontal } from "react-icons/go";
import { GoPlus } from "react-icons/go";
import { GoX } from "react-icons/go";

function Task({ tasks, column }) {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  return (
    <div className="">
      <div className="flex justify-between">
        <h1 className="text-sm font-extrabold">{column.title}</h1>
        <div>
          <GoKebabHorizontal />
        </div>
      </div>
      {/* Wrap the entire draggable area with DndContext */}
      <div className="overflow-y-auto max-h-56 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
        {tasks?.map((task) => (
          <>
<div className="">
<Draggable key={task.id} id={task.id} data={task}>
                <div>

                <div className="border-2 rounded-xl text-sm shadow-xl px-4 py-2 space-y-14 mt-2 w-full">
                  <h3 className="text-xs">{task.title}</h3>
                </div>
                </div>
              </Draggable>
            </div>
          </>
        ))}
        {!open && (
          <div className="flex  space-x-1">
            <button className="py-2 text-xs  " onClick={() => setOpen(true)}>
              Add Card
            </button>
            <p className="mt-2">
              <GoPlus />
            </p>
          </div>
        )}

        {open ? (
          <>
            <input
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              type="text"
              placeholder="Enter the Task"
              className="w-full border-2 shadow-orange-800 rounded-lg p-1 mb-2 mt-3 text-xs"
            />
            <button
              className="rounded-lg py-1 px-4 font-medium mr-2 space-y-6 border-2 bg-black text-white text-sm  "
              onClick={() => {
                if (inputValue.trim()) {
                  dispatch(
                    addTask({
                      columnId: column.id,
                      task: { id: nanoid(), title: inputValue },
                    })
                  );
                }
                setInputValue("");
                // setOpen(false)
              }}
            >
              Add card
            </button>
            <button onClick={() => setOpen(false)}>
              <GoX />
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Task;
