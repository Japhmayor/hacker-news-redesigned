import PropTypes from 'prop-types';

const Repeat = ({ times, children }) => {
  const items = [];

  for (let i = 0; i < times; i++) {
    items.push(children);
  }

  return items;
};

Repeat.propTypes = {
  times: PropTypes.number.isRequired,
};

export default Repeat;
