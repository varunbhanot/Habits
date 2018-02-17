import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/HomeButtonStyle'
import {Icon} from 'react-native-elements'

export default class HomeButton extends Component {
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

  constructor(props) {
    super(props)
    this.state = { isVisible: false }
  }

  onPress = () => {
    this.setState({
      isVisible: true
    })
  }

  render () {
    return (
      <View>
      <TouchableOpacity onPress={this.onPress}>
      <Icon name='note-add' color='#fff'/>      
      </TouchableOpacity>
      {/* <Overlay isVisible={this.state.isVisible}>
      <Text>Hello from Overlay!</Text>
      </Overlay>
       */}</View>
      
      
    )
  }
}
