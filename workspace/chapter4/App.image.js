/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image style={{width:50, height: 50}} source={{uri: 'https://class.codejong.kr/uploads/default/original/1X/0995530fe036789b0cf6f029655b1fb88562dafe.jpeg'}}/>
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
