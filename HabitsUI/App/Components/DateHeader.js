import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/DateHeaderStyle'
import moment from 'moment'
import _ from 'lodash'

export default class DateHeader extends Component {

  //Renders Text in way we want
  renderText(item, index) {
    var item_arr = item.split(" ")
    return <View style={styles.dateText} key={{ index }}>
      <Text style={styles.text}>{item_arr[1].toUpperCase()}</Text>
      <Text style={styles.text}>{item_arr[0]}</Text>
    </View>


  }
  //Generate dates using moments.js
  generateDates() {
    r = _.range(5, 0, -1)
    dates = _.map(r, function (value) {
      return moment()
        .subtract(value, 'days')
        .format("DD ddd ")
    })
    return dates
  }
  //Actual render method
  renderDateHeader() {
    return (
      <View style={styles.headerView}>
        {this.generateDates().map((item, index) => {
          return this.renderText(item, index)
        })}
      </View>
    );
  }

  render() {
    return (
      <View>
        {this.renderDateHeader()}
      </View>
    )
  }
}
