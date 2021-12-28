import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAllUsersExample } from '../redux/example/exampleAllUsersSlice';

import Navbar from '../components/Navbar';
import UserInfo from '../components/UserInfo';

import { UserBoxList } from '../components/styled/UserBoxList.styled';
import Loading from '../components/Loading';

function AllUsers() {
  const dispatch = useDispatch();
  const allUsers = useSelector(state => state.allUsers);
  const { loading, users, error } = allUsers;

  useEffect(() => {
    dispatch(getAllUsersExample());
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
        <UserBoxList>
          {users.map(el => (
            <UserInfo
              key={el.id}
              id={el.id}
              title={el.title}
              completed={el.completed}
            />
          ))}
        </UserBoxList>
      )}
    </>
  );
}

export default AllUsers;
