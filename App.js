import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Component/Header';
import Input from './Component/Input';
import { Title } from 'react-native-paper';
export default function App() {
  return (
    <>
    <Header/>
    <Title style={{textAlign:'center',margin:'10px'}}>Welcome To best To Do App!</Title>
    <Input/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
