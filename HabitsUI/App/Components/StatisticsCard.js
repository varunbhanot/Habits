import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/StatisticsCardStyle'
import { Card, Icon } from 'react-native-elements'

export default class StatisticsCard extends Component {

  render() {
    return (
      <Card containerStyle={styles.container} >
        <View style={styles.cardView}>
          <View style={styles.iconContainer}>
            <Icon name={this.props.iconName} type='font-awesome' color={this.props.iconColor} />
            <Text style={styles.cardText}>{this.props.text}</Text>
          </View>
          <View style={styles.valueContainer}>
            <Text style={styles.cardText}>{this.props.value}</Text>
          </View>
        </View>
      </Card>

    )
  }
}
