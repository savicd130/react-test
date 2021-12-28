import React from 'react';
import styles from './Loading.module.scss';
import Spinner from '../assets/loading.gif';

function Loading() {
  return (
    <div className={styles.loading}>
      <img src={Spinner} />
    </div>
  );
}

export default Loading;
