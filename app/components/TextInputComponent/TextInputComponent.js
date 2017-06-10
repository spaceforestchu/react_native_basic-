import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput } from 'react-native';

export default class TextInputComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: this.props.value
    }
  }


  static defaultProps = {
    value: ''
  }

  onChangeText(value) {
    this.setState({value: value});
  }

  onSubmitEditing(e) {
    console.log('onSubmitEditing called: ' + e);
  }

  onFocus(){

  }

  onBlur() {

  }

  render() {

    return (
      <View style={styles.TextContainer}>
        <TextInput
          style={styles.TextInputStyle}
          value={this.state.value}
          onChangeText = { (value) => this.onChangeText(value)}
          onSubmitEditing = {(e) => this.onSubmitEditing(e.nativeEvent.text)}
          onBlur = {(e) => this.onBlur(e)}
          onFocus = {(e) => this.onFocus(e)}
          maxLength={10}
          selectTextOnFocus={false}
          selectionColor='red'
          editable={true}
        />
        <Text>{this.state.value}</Text>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  TextInputStyle: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 50,
    marginRight: 50,
    width: 275
  },
  TextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

AppRegistry.registerComponent('TextInputComponent', () => TextInputComponent);
