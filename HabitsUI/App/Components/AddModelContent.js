import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text,TouchableOpacity,TextInput } from 'react-native'
import styles from './Styles/AddModelContentStyle'
import Modal from "react-native-modal";

export default class AddModelContent extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Habits Name' };
  }
    _renderButton = (text, onPress) => (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  
    _renderModalContent = (modalToggle) => (
      <View style={styles.modalContent}>
        <Text>Hello!</Text>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
        {this._renderButton('Close', ()=>modalToggle(true))}
      </View>
    );

  render() {
    
    return (
      <View style={{ flex: 1 }}>
        <Modal isVisible={this.props.isModalVisible}>
          {this._renderModalContent(this.props.modalToggle)}
        </Modal>
      </View>
    );
  }
}
