import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/allUsers">All Users</Link>
        </li>
      </ul>
    </div>
  );
}
