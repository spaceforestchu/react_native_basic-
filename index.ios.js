/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import { SimpleComponent1, TextInputComponent, SliderComponent, PickerComponent, SwitchComponent } from './app/index';

export default class simple_component extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SwitchComponent />
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
  }
});

AppRegistry.registerComponent('simple_component', () => simple_component);
