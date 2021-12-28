import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getUserExample } from '../redux/example/exampleUserSlice';

import Navbar from '../components/Navbar';
import { UserCard } from '../components/styled/UserCard.styled';
import Loading from '../components/Loading';

function User() {
  const { id } = useParams();
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.user);
  const { loading, user, error } = userInfo;

  function goBack() {
    navigate(-1);
  }

  useEffect(() => {
    dispatch(getUserExample(id));
  }, [dispatch]);

  return (
    <>
      <Navbar />

      {loading ? (
        <h2>
          <Loading />
        </h2>
      ) : !loading && error ? (
        <h2>{error}</h2>
      ) : (
        <UserCard bg={user.completed ? 'green' : 'red'}>
          <div>
            <button onClick={goBack}>Go back</button>
          </div>
          <h1>{user.title}</h1>
        </UserCard>
      )}
    </>
  );
}

export default User;
