import React from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  setTodoSingleDataDelete,
  setTodoSingleDataDone,
  setTodoSingleDataEdit
} from "../Redux/actions";
export function TodolistView() {
  const todoListData = useSelector((state) => state.todoData);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(setTodoSingleDataDelete(id));
  };
  const handleUpdate = (todo) => {
    dispatch(setTodoSingleDataEdit(todo));
  };
  const handleDone = (todo) => {
    dispatch(setTodoSingleDataDone(todo));
  };

  return (
    <>
      {todoListData?.map((item, index) => (
        <div key={index}>
          <p
            style={
              item.complete
                ? { textDecorationLine: "line-through" }
                : { textDecorationLine: "" }
            }
          >
            {item.title}
          </p>
          <Button
            variant="success"
            className="h-25 mx-2 mb-1"
            onClick={() => handleDone(item)}
          >
            {item.complete ? "Undone" : "Done"}
          </Button>
          <Button
            variant="info"
            className="h-25 mx-2 mb-1"
            onClick={() => handleUpdate(item)}
          >
            Update
          </Button>
          <Button
            variant="warning"
            className="h-25 mb-1"
            onClick={() => handleDelete(item.id)}
          >
            Delete
          </Button>
        </div>
      ))}
    </>
  );
}
