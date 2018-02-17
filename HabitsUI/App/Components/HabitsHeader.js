import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'
import { Header, Icon } from 'react-native-elements'
import styles from './Styles/HabitsHeaderStyle'
import HomeButton from './HomeButton'

//TODO : pass the components via props and change on both screens
export default class HabitsHeader extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render() {
    return (
      <Header backgroundColor='#161616' outerContainerStyles={{ borderBottomWidth: 0 }} leftComponent={this.props.leftComponent}
        centerComponent={this.props.centerComponent}
        rightComponent={this.props.rightComponent}
      />
    )
  }
}
