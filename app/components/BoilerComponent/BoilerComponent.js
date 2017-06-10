import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class BoilerTemplate extends Component {

  constructor(){
    super();
    this.state = {

    }
  }


  render() {

    return (
      <View>
        <Text>

        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  }
});

AppRegistry.registerComponent('BoilerTemplate', () => BoilerTemplate);
