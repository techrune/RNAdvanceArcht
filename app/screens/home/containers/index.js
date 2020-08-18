import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from 'app/screens/login/actions';
import styles from './styles';

export default function Home() {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());
  const token = useSelector(state => state.loginReducer.email);
  const id = useSelector(state => state.loginReducer.id);

  return (
    <View style={styles.container}>
      <Button icon="logout" mode="outlined" onPress={onLogout}>
        Logout
      </Button>
      <Text style={styles.login}>Login Status : {token}</Text>
    </View>
  );
}
