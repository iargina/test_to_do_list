import React, { useState } from 'react';
import css from './TaskForm.module.css';
import { addToDo } from 'redux/todoSlice';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';

export const TaskForm = () => {
  const [toDoTitle, setTitle] = useState('');
  const [toDoDescription, setDescription] = useState('');

  const dispatch = useDispatch();

  const handleChange = ev => {
    switch (ev.currentTarget.name) {
      case 'toDoTitle':
        setTitle(ev.currentTarget.value);
        break;
      case 'toDoDescription':
        setDescription(ev.currentTarget.value);
        break;
      default:
        alert('Something went wrong');
    }
  };

  const onSubmit = event => {
    event.preventDefault();
    const todo = {
      title: toDoTitle,
      description: toDoDescription,
      status: null,
    };
    if (toDoTitle === '') {
      document.querySelector('#toDoTitle').style.border = '1px solid #ff0000';
      alert('This field is empty');
      return;
    }
    if (toDoDescription === '') {
      document.querySelector('#toDoDescription').style.border =
        '1px solid #ff0000';
      alert('This field is empty');
      return;
    }

    const newTask = { id: nanoid(5), ...todo };
    dispatch(addToDo(newTask));
    setTitle('');
    setDescription('');
    return;
  };

  return (
    <form className={css.contactForm} onSubmit={onSubmit}>
      <label htmlFor="" className={css.formLabel}>
        Title
        <input
          type="text"
          name="toDoTitle"
          className={css.input}
          value={toDoTitle}
          onChange={handleChange}
          id="toDoTitle"
        />
      </label>
      <label htmlFor="" className={css.formLabel}>
        Description
        <input
          type="text"
          name="toDoDescription"
          className={css.input}
          value={toDoDescription}
          onChange={handleChange}
          id="toDoDescription"
        />
      </label>
      <button type="submit" className={css.submit}>
        Create
      </button>
    </form>
  );
};
