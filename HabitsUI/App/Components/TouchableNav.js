import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text,TouchableOpacity } from 'react-native'
import styles from './Styles/TouchableNavStyle'

export default class TouchableNav extends Component {
  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.onPress}>
          <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
      </View>
    )
  }
}
