import style from './ImgPost.module.css';
import notphoto from '../img/notphoto.jpg';

const ImgPost = () => <img className={style.img} src={notphoto} alt="{title}" />;
export default ImgPost;
