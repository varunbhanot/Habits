import React, { Component } from 'react'
import { View, Text, TouchableWithoutFeedback, Alert } from 'react-native'
import moment from 'moment'
import { DELETE, ADD } from '../Lib/constants'


//Styles
import styles from './Styles/HabitCardStyle'

//Custom Imports
import { Icon } from 'react-native-elements'
import _ from 'lodash'

export default class HabitCard extends Component {

  _onPressIcon() {
    Alert.alert('Press and hold to check and uncheck')
  }

  generateDates() {
    r = _.range(5, 0, -1)
    dates = _.map(r, function (value) {
      return moment()
        .subtract(value, 'days')
        .format("YYYY-MM-DD")
    })
    return dates
  }



  renderIcon(value, index, saveProgress,lastFive,id,deviceId) {    
    if (lastFive.includes(value)) {
      return (
        <TouchableWithoutFeedback onLongPress={() => saveProgress(value,id,deviceId,DELETE)} key={index} onPress={this._onPressIcon}>
          <View style={styles.iconContainer} key={index}>
            <Icon name='check' color='#26A69A' size={20} key={index} />
          </View>
        </TouchableWithoutFeedback>)
    } else {
      return (
        <TouchableWithoutFeedback onLongPress={() => saveProgress(value,id,deviceId,ADD)} key={index} onPress={this._onPressIcon}>
          <View style={styles.iconContainer} key={index}>
            <Icon name='close' color='gray' size={20} key={index} />
          </View>
        </TouchableWithoutFeedback>
      )
    }
  }

  renderCard(habit, index, saveProgress, navigate) {    
    const { name, question, lastFive,id,deviceId } = habit;
    return (
      <TouchableWithoutFeedback key={index} onPress={() => (navigate.navigate('StatisticsScreen', { name,id }))}>
        <View key={index} style={styles.cardContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>
              {name}
            </Text>
          </View>
          {
             this.generateDates().map((value, index) => (this.renderIcon(value, index, saveProgress,lastFive,id,deviceId)))
          }
        </View>
      </TouchableWithoutFeedback>
    );
  }

  render() {
    return (
      <View key={this.props.index}>
        {this.renderCard(this.props.habit, this.props.index, this.props.saveProgress, this.props.navigate)}
      </View>
    )
  }
}
