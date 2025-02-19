/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useMemo } from 'react';
import {useDroppable} from '@dnd-kit/core';

export function Droppable({id, children}) {
  const {isOver, setNodeRef} = useDroppable({
    id: id,
  });
  const style =  useMemo((

  ) => ({
    opacity: isOver ? 1 : 0,

  }),
  [isOver]);
  
  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}