import style from './Post.module.css';
import ContentPost from './ContentPost/ContentPost';
import DatePost from './DatePost/DatePost';
import DeletePost from './DeletePost/DeletePost';
import ImgPost from './ImgPost/ImgPost';
import RatingPost from './RatingPost/RatingPost';
import PropTypes from 'prop-types';

const Post = ({postData}) => (
  <li className={style.post}>
    <ImgPost />
    <ContentPost postData={postData} />
    <RatingPost postData={postData} />
    <DatePost postData={postData} />
    <DeletePost />
  </li>
);
export default Post;

Post.propTypes = {
  postData: PropTypes.object,
};
