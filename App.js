/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {StyleSheet, StatusBar} from 'react-native';

import {connect} from 'react-redux';

import Content from './screens/route/ContentRoute';
import Logout from './screens/route/logoutRoute';

import {authAction} from './redux/actions/auth_action';

function App(props) {
  useEffect(() => {
    props.authAction();
  }, []);
  const {userState} = props.authReducer;
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#151515" />
      {userState.isLogin ? <Content /> : <Logout />}
    </>
  );
}

const styles = StyleSheet.create({});

const mapStateToProps = state => {
  return {
    authReducer: state.authReducer,
  };
};

export default connect(
  mapStateToProps,
  {authAction},
)(App);
