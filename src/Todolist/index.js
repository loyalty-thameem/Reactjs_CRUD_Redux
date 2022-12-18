import React, { useEffect, useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setTodoData, setTodoSingleDataEdit } from "../Redux/actions";
import { TodolistView } from "../TodolistView";
export function Todolist() {
  const { id, title } = useSelector((state) => state.singleTodoData);
  const [todo, setTodo] = useState("");
  const [todoId, setTodoId] = useState("");
  console.warn("todo", todo);
  console.warn("todoId", todoId);
  useEffect(() => {
    if (id) {
      setTodo(title);
      setTodoId(id);
    }
  }, [id, title]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo === "" && title === undefined) {
      alert("Please add todo");
    } else if (todoId === "" && title === undefined) {
      dispatch(setTodoData({ id: ids, title: todo, complete: false }));
      setTodo("");
      setTodoId("");
    } else {
      dispatch(
        setTodoSingleDataEdit({ id: todoId, title: todo, complete: false })
      );
      setTodo("");
      setTodoId("");
    }
  };
  const ids = Math.floor(Math.random(1000) * 100);
  return (
    <>
      <Card className="text-center bg-light" style={{ width: "28rem" }}>
        <Card.Body>
          <Card.Title>Todolist App</Card.Title>
          <Form
            onSubmit={handleSubmit}
            className="d-flex justify-content-center gap-1"
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                value={todo}
                placeholder="something text"
                onChange={(event) => setTodo(event.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="h-25">
              {id ? "Update" : "Add"}
            </Button>
          </Form>

          <TodolistView />
        </Card.Body>
      </Card>
    </>
  );
}
