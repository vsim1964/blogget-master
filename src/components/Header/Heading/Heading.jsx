import style from './Heading.module.css';
import PropTypes from 'prop-types';
import { Text } from '../../../UI/Text/Text';

export const Heading = ({text}) => (
  <Text
    as='h1'
    size={22}
    dsize={26}
    center
    className={style.heading}>
    {text}
  </Text>
);

Heading.propTypes = {
  text: PropTypes.string,
};
