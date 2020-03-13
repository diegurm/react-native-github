import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import './src/config/ReactotronConfig';

const App = () => {
  console.tron.log('Hello Word');
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Welcome to React Native</Text>
        <Text style={styles.sectionDescription}>
          Edit <Text style={styles.highlight}>App.js</Text> to change this
          screen and then come back to see your edits.
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  sectionDescription: {
    textAlign: 'center',
  },
});

export default App;
