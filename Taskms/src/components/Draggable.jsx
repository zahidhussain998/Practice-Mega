/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import {useDraggable} from '@dnd-kit/core';

export function Draggable({id, children, data}) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: id,
    data: data
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  
  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  );
}