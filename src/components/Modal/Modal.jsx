import css from './Modal.module.css';
import { getToDoToRender } from 'redux/todo/toDoSelectors';
import { useSelector } from 'react-redux';
import { deleteTodoToRender } from 'redux/todo/todoSlice';
import { useDispatch } from 'react-redux';

export const TaskModal = () => {
  const postToRender = useSelector(getToDoToRender);
  const { title, description } = postToRender;
  const dispatch = useDispatch();

  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <h1>{title}</h1>
        <p>{description}</p>
        <input type="checkbox" />
        <button type="button" onClick={() => dispatch(deleteTodoToRender())}>
          Close
        </button>
      </div>
    </div>
  );
};
