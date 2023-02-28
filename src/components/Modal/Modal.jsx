import css from './Modal.module.css';
import ReactDOM from 'react-dom';

export const TaskModal = ({ id, title }) => {
  const modalClose = () => {
    document.getElementById('overlay').classList.add('hidden');
  };

  return ReactDOM.createPortal(
    <div id="overlay" className={css.overlay} onClick={modalClose}>
      <div className={css.modal}>
        <p>{id}</p>
      </div>
    </div>,
    document.getElementById('#modalRoot')
  );
};
