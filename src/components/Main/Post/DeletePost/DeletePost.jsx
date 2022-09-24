import style from './DeletePost.module.css';
import { ReactComponent as DeleteIcon } from './img/delete.svg';

const DeletePost = () => (
  <button className={style.delete}>
    <DeleteIcon width={24} height={24} />
  </button>
);
export default DeletePost;
