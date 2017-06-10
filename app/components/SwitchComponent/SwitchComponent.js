import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Switch } from 'react-native';

export default class SwitchComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: this.props.value
    }
  }

  static defaultProps = {
    value: false
  }

  onValueChange(value) {
    console.log(value);
    this.setState({
      value: value
    });
  }

  render() {
    let toggle = this.state.value ? 'ON' : 'OFF';
    return (
      <View>
        <Text>
          {toggle}
        </Text>
        <Switch
          onValueChange={(value) => this.onValueChange(value)}
          value={this.state.value}
          onTintColor='#7fffd4'
          tintColor='black'
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  }
});

AppRegistry.registerComponent('SwitchComponent', () => SwitchComponent);
