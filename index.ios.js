/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import {FlexComponent2, FlexComponent, SimpleComponent1, TextInputComponent, SliderComponent, PickerComponent, SwitchComponent, StyledComponent } from './app/index';

export default class simple_component extends Component {
  render() {
    return (
      <View>
        <FlexComponent2 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  container1:{
    justifyContent: 'center',
    marginTop: 250
  }
});

AppRegistry.registerComponent('simple_component', () => simple_component);
