/**
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, PanResponder} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  _x = 3
  static state = {

  }
  constructor() {
    super()
    ///
    this.state = {

    }
    this._x = 3;
    this._panResponderRed = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => {
        console.log('2 :', evt);
        return true;
      },
    });
    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => {
        console.log('1 :', evt);
        return true
      },
      onStartShouldSetPanResponderCapture: (evt, gestureState) => {
        // Should child views be prevented from becoming responder on first touch?
        
        console.log(evt);
        return false;
      },
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        console.log('onMoveShouldSetPanResponder')
        return true;
      },
      // onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
      //   // Should child views be prevented from becoming responder of subsequent touches?
      //   console.log('onMoveShouldSetPanResponderCapture')
      //   return true;
      // },

      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!

        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: (evt, gestureState) => {
        console.log('onPanResponderMove')
        // The most recent move distance is gestureState.move{X,Y}

        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      },
    });
  }

  render() {
    return (
      <View style={{flexDirection:'column', alignItems:'center', padding: 20}}>
        <View {...this._panResponder.panHandlers} style={{width:200, height:300, borderWidth:StyleSheet.hairlineWidth}}>
          <View {...this._panResponderRed.panHandlers} style={{width:100,height:150, alignSelf:'center', backgroundColor:'red'}}/>
        </View>
      </View>
    );
  }
}
