import PropTypes from 'prop-types';

export function Controls({ currentItem, totalItems, onChange }) {
  return (
    <section>
      <button
        type="button"
        disabled={currentItem === 1}
        onClick={() => onChange(-1)}
      >
        Prev
      </button>
      <button
        type="button"
        disabled={currentItem === totalItems}
        onClick={() => onChange(1)}
      >
        Next
      </button>
    </section>
  );
}

Controls.propTypes = {
  currentItem: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
