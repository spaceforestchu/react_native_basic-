import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Picker } from 'react-native';

export default class PickerComponent extends Component {

  constructor(){
    super();
    this.state = {
      category: 'Technology'
    }
  }


  onValueChange(key, value){
    console.log(key + ': ' + value);
    this.setState({
      category: value
    });
  }

  render() {

    return (
      <View>
        <Picker
          selectedValue={this.state.category}
          onValueChange={this.onValueChange.bind(this, 'category')}
          >
          <Picker.Item label='Javascript' value='Javascript'/>
          <Picker.Item label='Business' value='Business'/>
          <Picker.Item label='Cooking' value='Cooking'/>
        </Picker>
        <Text>
          Selected category:
          {this.state.category}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  }
});

AppRegistry.registerComponent('PickerComponent', () => PickerComponent);
