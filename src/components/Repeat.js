import PropTypes from 'prop-types';

const Repeat = ({ times, children }) => {
  let items = [];
  
  for (let i = 0; i < times; i++) {
    items.push(children)
  }
  
  return items;
};

Repeat.propTypes = {
  times: PropTypes.number.isRequired
};

export default Repeat;
