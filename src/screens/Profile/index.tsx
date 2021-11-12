import React from 'react';
import { useAuth } from '../../hooks/auth';

import {
  Avatar,
  Container,
  Name,
  User
} from './styles';

export function Profile() {
  const { user } = useAuth()

  const UI_AVATAR_URL = `https://ui-avatars.com/api/` +
    `?name=${user.name.firstname}+${user.name.lastname}` +
    `&size=128` +
    `&rounded=true`
    
  return (
    <Container>
      <User>
        <Avatar source={{ uri: UI_AVATAR_URL }} />
        <Name>{user.name.firstname} {user.name.lastname}</Name>
      </User>
    </Container>
  );
}
