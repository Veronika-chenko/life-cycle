import PropTypes from 'prop-types';

export function Progress({ current, total }) {
  return (
    <p>
      {current}/{total}
    </p>
  );
}

Progress.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
