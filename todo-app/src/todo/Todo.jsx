import React, { useState } from 'react';
import './Todo.css';

const Todo = () => {
  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addTask = () => {
    if (inputValue.trim() === '') return;
    setTask([...task, inputValue]);
    setInputValue('');
  };

  const deleteTask = (index) => {
    const newTasks = task.filter((_, i) => i !== index);
    setTask(newTasks);
    setEditIndex(null);
    setInputValue('');
  };

  const editTask = (index) => {
    setInputValue(task[index]);
    setEditIndex(index);
  };

  const changeTask = (index) => {
    if (editIndex === null || inputValue.trim() === '') return;
    const updatedTasks = [...task];
    updatedTasks[index] = inputValue.trim();
    setTask(updatedTasks);
    setEditIndex(null);
    setInputValue('');
  };

  return (
    <div className='todo-container'>
      <h1 className='todo-title'>My To-do List</h1>

      <div className='todo-input-area'>
        <input
          type='text'
          className='todo-input'
          placeholder='Enter your task'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {editIndex !== null ? (
          <button className='todo-button update' onClick={() => changeTask(editIndex)}>Update</button>
        ) : (
          <button className='todo-button add' onClick={addTask}>Add</button>
        )}
      </div>

      <div className='todo-list'>
        {task.map((item, index) => (
          <div className='todo-item' key={index}>
            <span className='todo-text'>{item}</span>
            <div className='todo-actions'>
              <button className='edit-btn' onClick={() => editTask(index)}>Edit</button>
              <button className='delete-btn' onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
