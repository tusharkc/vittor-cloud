import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTodo, changeTodoStatus, selectTodoList } from "./todoSlice";

import "./authorizedPage.styles.css";

const AuthorizedPage = () => {
  const todosList = useSelector(selectTodoList);
  const dispatch = useDispatch();
  function getRandomInt() {
    return Math.floor(Math.random() * 420);
  }

  const currentTodoVal = useRef("");

  return (
    <div>
      <input
        onChange={(e) => {
          currentTodoVal.current = e.target.value;
        }}
        name="todoTitle"
        id="todoTitle"
      />
      <button
        onClick={() => {
          dispatch(
            addTodo({
              id: getRandomInt(),
              todoTitle: currentTodoVal.current,
              currentStatus: "incomplete",
            })
          );
        }}
      >
        Add Todo
      </button>

      {todosList?.map((todo, i) => {
        return (
          <div key={i} className="todos_container">
            <h1>{todo.todoTitle}</h1>
            <h1>{todo.currentStatus}</h1>
            <div>
              <select
                name="userAuth"
                id="userAuth"
                onChange={(e) => {
                  dispatch(
                    changeTodoStatus({
                      id: todo.id,
                      todoTitle: todo.todoTitle,
                      currentStatus: e.target.value,
                    })
                  );
                }}
              >
                <option value="completed">completed</option>
                <option value="incomplete">incomplete</option>
              </select>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AuthorizedPage;
