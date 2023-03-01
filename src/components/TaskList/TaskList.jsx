import React from 'react';
import css from './TaskList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getToDos } from 'redux/todo/toDoSelectors';
import { openModal } from 'redux/modal/modal-slice';
import { selectIsModalOpen } from 'redux/modal/modal-selectors';
import { addTodoToRender } from 'redux/todo/todoSlice';

export const TaskList = () => {
  const toDos = useSelector(getToDos);
  const dispatch = useDispatch();
  let post = null;
  const isModalOpen = useSelector(selectIsModalOpen);

  const clickHandler = ev => {
    const postID = ev.currentTarget.firstElementChild.textContent;
    const post = toDos.find(el => el.id === postID);
    console.log(post);
    dispatch(addTodoToRender(post));
    return;
  };

  document
    .querySelectorAll('tr')
    .forEach(e => e.addEventListener('click', clickHandler));

  return (
    <table className={css.table}>
      <tbody>
        <tr>
          <th>id</th>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
        {toDos.map(el => {
          return (
            <tr key={el.id}>
              <td>{el.id}</td>
              <td>{el.title}</td>
              <td>{el.description}</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
