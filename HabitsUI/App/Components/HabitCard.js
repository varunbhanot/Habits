import React, { Component } from 'react'
import { View, Text, TouchableWithoutFeedback, Alert } from 'react-native'

//Styles
import styles from './Styles/HabitCardStyle'

//Custom Imports
import { Icon } from 'react-native-elements'
import _ from 'lodash'

export default class HabitCard extends Component {

  _onPressIcon() {
    Alert.alert('Press and hold to check and uncheck')
  }


  renderIcon(value, index, saveProgress) {
    if (value === 1) {
      return (
        <TouchableWithoutFeedback onLongPress={() => saveProgress(value)} key={index} onPress={this._onPressIcon}>
          <View style={styles.iconContainer} key={index}>
            <Icon name='check' color='#26A69A' size={20} key={index} />
          </View>
        </TouchableWithoutFeedback>)
    } else {
      return (
        <TouchableWithoutFeedback onLongPress={() => saveProgress(value)} key={index} onPress={this._onPressIcon}>
          <View style={styles.iconContainer} key={index}>
            <Icon name='close' color='gray' size={20} key={index} />
          </View>
        </TouchableWithoutFeedback>
      )
    }
  }

  renderCard(person, index, saveProgress, navigate) {
    const { name, age, lastFive } = person;
    return (
      <TouchableWithoutFeedback key={index} onPress={() => (navigate.navigate('StatisticsScreen', { name: { name } }))}>
        <View key={index} style={styles.cardContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>
              {name}
            </Text>
          </View>
          {
            range = lastFive.map((value, index) => (
              this.renderIcon(value, index, saveProgress)
            ))
          }
        </View>
      </TouchableWithoutFeedback>
    );
  }

  render() {
    return (
      <View key={this.props.index}>
        {this.renderCard(this.props.person, this.props.index, this.props.saveProgress, this.props.navigate)}
      </View>
    )
  }
}
