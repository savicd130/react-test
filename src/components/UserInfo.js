import React from 'react';
import { Button } from './styled/Button.styled';
import { UserInfoBox } from './styled/UserInfoBox.styled';

function UserInfo({ id, title }) {
  return (
    <UserInfoBox>
      <p>Title:{title}</p>
      <Button bg={'red'} to={`/user/${id}`}>
        Visit
      </Button>
    </UserInfoBox>
  );
}

export default UserInfo;
