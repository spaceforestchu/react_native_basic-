import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';


export default class SimpleComponent1 extends Component {

  constructor(){
    super();
    this.state = {
      showMessage: true
    }
  }


  static defaultProps = {
    message: 'Hello Hamster'
  }


  hideMsg(){
    this.setState({showMessage: false});
  }

  componentWillMount() {
    this.hideMsg();
  }


  render() {
    let msg;
    (this.state.showMessage) ? msg = this.props.message : msg = 'No Message';

    return (
      <View>
        <Text>
          {msg}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  }
});

SimpleComponent1.propTypes = {
  message: React.PropTypes.string
}

AppRegistry.registerComponent('SimpleComponent1', () => SimpleComponent1);
