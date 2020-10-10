import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import Head from './components/Head.js';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Head />
      </View>
      <View style={styles.main}>
        <Main />
        <StatusBar style="auto" />
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    height: '50px',
    backgroundColor: 'grey',
    alignContent: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
