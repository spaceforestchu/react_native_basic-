import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class FlexComponent extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }


  render() {

    return (
      <View>
        <View style={styles.topContainer}>
          <View style={styles.box1}>
            <Text style={styles.boxText}>
              Box 1
            </Text>
          </View>
          <View style={styles.box2}>
            <Text style={styles.boxText}>
              Box 2
            </Text>
          </View>
          <View style={styles.box3}>
            <Text style={styles.boxText}>
              Box 3
            </Text>
          </View>
        </View>


        <View style={styles.bottomContainer}>
          <View style={styles.box4}>
            <Text style={styles.boxText}>
              Box 4
            </Text>
          </View>
          <View style={styles.box5}>
            <Text style={styles.boxText}>
              Box 5
            </Text>
          </View>
          <View style={styles.box6}>
            <Text style={styles.boxText}>
              Box 6
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    height: 100
  },
  box1: {
    flex: 1,
    backgroundColor: '#FF5300',
    padding: 10
  },
  box2: {
    flex: 1,
    backgroundColor: '#FF3435',
    padding: 10
  },
  box3: {
    flex: 1,
    backgroundColor: '#FF5820',
    padding: 10
  },
  bottomContainer: {
    flexDirection: 'column',
    height: 550
  },
  box4: {
    flex: 1,
    backgroundColor: '#FF5300',
    padding: 10
  },
  box5: {
    flex: 1,
    backgroundColor: '#FF3435',
    padding: 10
  },
  box6: {
    flex: 1,
    backgroundColor: '#FF5820',
    padding: 10
  },
  boxText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('FlexComponent', () => FlexComponent);
