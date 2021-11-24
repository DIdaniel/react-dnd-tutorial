import React, { useState } from "react";
import Picture from "./Picture";
import "../App.css";
import { useDrop } from "react-dnd";

const PictureList = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1637684990963-366531ce088a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1637680620358-b64570c219d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  },
];

const DragDrop = () => {
  const [board, setBoard] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
    // setBoard([pictureList[0]]);
  };

  return (
    <>
      <div className="Pictures">
        {PictureList.map((picture) => {
          return <Picture picture={picture} key={picture.id} />;
        })}
      </div>
      <div className="Board" ref={drop}>
        {board.map((picture) => {
          return <Picture picture={picture} key={picture.id} />;
        })}
      </div>
    </>
  );
};

export default DragDrop;
