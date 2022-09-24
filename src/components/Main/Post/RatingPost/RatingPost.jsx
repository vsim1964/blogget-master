import style from './RatingPost.module.css';
import PropTypes from 'prop-types';
import { Text } from '../../../../UI/Text/Text';

const RatingPost = ({postData}) => {
  const {ups} = postData;
  return (
    <div className={style.rating}>
      <button className={style.up} aria-label="Повысить Рейтинг"></button>
      <Text
        As='p'
        size={16}
        lineHeight='18.4'
      >
        {ups}
      </Text>
      <button className={style.down} aria-label="Понизить рейтинг"></button>
    </div>
  );
};
export default RatingPost;

RatingPost.propTypes = {
  postData: PropTypes.object,
};
