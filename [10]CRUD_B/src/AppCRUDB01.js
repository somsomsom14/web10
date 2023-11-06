import React, { useState, useRef } from 'react';

export default function AppCRUDB01() {
  const [todos, setTodos] = useState([
    { id: 1, title: '밥먹기', check: false },
    { id: 2, title: '공부하기', check: true },
  ]);

  return (
    <div>
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <TodoStatus todos={todos} />
    </div>
  );
}

const TodoInput = ({ todos, setTodos }) => {
  const [title, setTitle] = useState('');
  const refTitle = useRef(null);

  const onAdd = (title) => {
    const id = todos[todos.length - 1].id + 1;
    setTodos([...todos, { id, title, check: false }]);
  };

  return (
    <input
      type="text"
      style={{ fontSize: 30, borderColor: 'red', borderWidth: 2 }}
      ref={refTitle}
      onKeyPress={(evt) => {
        if (evt.key === 'Enter') {
          onAdd(title);
          setTitle('');
          refTitle.current.focus();
        }
      }}
      onChange={(evt) => setTitle(evt.target.value)}
      value={title}
    />
  );
};

const TodoList = ({ todos, setTodos }) => {
  return todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
  ));
};

const TodoItem = ({ todo, todos, setTodos }) => {
  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  const onUpdate = (id, check) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id == id) return { ...todo, check };
        return todo;
      })
    );
  };

  return (
    <div>
      <span
        onClick={() => onUpdate(todo.id, !todo.check)}
        style={{
          fontSize: 30,
          textDecorationLine: todo.check ? 'line-through' : '',
        }}
      >
        {todo.title}
      </span>
      <button onClick={() => onDelete(todo.id)}>del</button>
    </div>
  );
};

const TodoStatus = ({ todos }) => {
  const remain = todos.filter((todo) => todo.check == false).length;
  return (
    <div style={{ marginTop: 10, fontSize: 30, color: 'blue' }}>
      남은일:{remain}개/{todos.length}개
    </div>
  );
};
