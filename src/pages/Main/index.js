import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import {Container, Form, Input, SubmitButton} from './styles';
import { Keyboard } from 'react-native';

export default function Main() {
  const [newUser, setNewUser] = useState();
  const [user, setUsers] = useState();

  handleAddUser = async () => {
    const response = await api.get(`/users/${newUser}`);

    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };

    setUsers([...users, data]);
    setNewUser('');

    Keyboard.dismiss();
  };

  return (
    <Container>
      <Form>
        <Input
          autoCorret={false}
          autoCapitalize="none"
          placeholder="Adicionar usuário"
          value={newUser}
          onChangeText={text => setNewUser(text)}
          returnKeyType="send"
          onSubmitEditing={handleAddUser}
        />

        <SubmitButton onPress={handleAddUser}>
          <Icon name="add" size={20} color="#FFF" />
        </SubmitButton>
      </Form>
    </Container>
  );
}

Main.navigationOptions = {
  title: 'Usuários',
};
