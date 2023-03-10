import { TaskForm } from './TaskForm/TaskForm';
import { TaskList } from './TaskList/TaskList';
import { useSelector } from 'react-redux';
import { getToDos } from 'redux/todo/toDoSelectors';
import { getToDoToRender } from 'redux/todo/toDoSelectors';
import { TaskModal } from './Modal/Modal';

export const App = () => {
  const toDo = useSelector(getToDos);
  const postToRender = useSelector(getToDoToRender);

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <h2 className="formTitle">To do list</h2>
        <TaskForm />
        <h2 className="contactListTitle">Tasks</h2>
        {toDo.length > 0 ? (
          <>
            <TaskList />
          </>
        ) : (
          <p>Your have no tasks in your list</p>
        )}
      </div>
      {postToRender && <TaskModal />}
    </>
  );
};
