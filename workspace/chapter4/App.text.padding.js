/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', fontSize:20, paddingLeft: 30}}>
          I am bold
          <Text style={{color: 'red'}} onPress={()=>{ alert(1) }}>
            and red
          </Text>
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>
          I am bold
          <Text style={{color: 'red'}} onPress={()=>{ alert(1) }}>
            and red
          </Text>
        </Text>
      </View>
    );
  }
}

/*
"I am bold and red"
0-9: bold
9-17: bold, red
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
