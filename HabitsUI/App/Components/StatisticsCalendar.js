import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/StatisticsCalendarStyle'
import { Calendar } from 'react-native-calendars'

export default class StatisticsCalendar extends Component {

  render() {
    return (
      <View>
        <Text style={styles.text}> This Month's Streaks</Text>
        <Calendar
          theme={{
            backgroundColor: '#303030',
            calendarBackground: '#303030',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#00adf5',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: '#303030',
            monthTextColor: '#26A69A',
            textDayFontFamily: 'monospace',
            textMonthFontFamily: 'monospace',
            textDayHeaderFontFamily: 'monospace',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16
          }}
          monthFormat={'MMM yyyy '}
          hideExtraDays={true}
          disableMonthChange={true}
          firstDay={1}
          hideDayNames={false}
          style={styles.calendarContainer}
          markedDates={this.props.streaks}

          markingType={'period'}
        />
      </View>
    )
  }
}
