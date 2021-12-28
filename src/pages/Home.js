import React from 'react';

import Navbar from '../components/Navbar';
import { Button } from '../components/styled/Button.styled';

function Home() {
  return (
    <div>
      <Navbar />
      <h1 style={{ marginBottom: '10px' }}>Welcome to app</h1>
      <h2>
        See all users
        <Button bg="green" to="/allUsers">
          Visit
        </Button>
      </h2>
    </div>
  );
}

export default Home;
