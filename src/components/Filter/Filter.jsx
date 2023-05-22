import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <div className={styles.filter}>
    <label className={styles.labelFilter}>
      Filter
      <input
        type="name"
        value={value}
        onChange={onChange}
        className={styles.filterInput}
      />
    </label>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
