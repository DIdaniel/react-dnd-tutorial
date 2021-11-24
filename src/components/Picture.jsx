import React from "react";
import { useDrag } from "react-dnd";

const Picture = ({ picture }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: picture.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <img
      ref={drag}
      src={picture.url}
      alt={picture.id}
      width="200px"
      style={{ border: isDragging ? "5px solid pink" : "0px" }}
    />
  );
};

export default Picture;
