import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from '';
import ApiKeys from './Apikeys';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Firebase</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
