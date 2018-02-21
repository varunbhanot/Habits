import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import styles from './Styles/AddModelContentStyle'
import Modal from 'react-native-modal'
import { FormInput, Header, FormValidationMessage } from 'react-native-elements'


const SCREEN_WIDTH = Dimensions.get('window').width;

export default class AddModelContent extends Component {
  constructor(props) {
    super(props);
    this.state = { Name: '', Question:'' };
    this.setValue = this.setValue.bind(this);    
  }

  setValue= (text,key)=>{
    this.setState({[key]:text})    
  }
  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View >
        <Text style={styles.button} >{text}</Text>
      </View>
    </TouchableOpacity>
  );



  _renderModalContent = (modalToggle,saveHabit) => (
    <View style={styles.modalContent}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Create Habit</Text>
      </View>
      <View style={styles.inputContainer}>
        <FormInput containerStyle={{ borderRadius: 40, borderWidth: 1, borderColor: "#26A69A", height: 50, width: SCREEN_WIDTH - 90, marginVertical: 10 }}
          placeholder="Name" placeholderTextColor="#26A69A" inputStyle={{ marginLeft: 15, color: "white" }} autoCapitalize="none" autoCorrect={false}
          keyboardAppearance="light" returnKeyType="next" blurOnSubmit={false} ref={input => (this.nameInput = input)} onChangeText={text=>this.setValue(text,'Name')} />
        {/*<FormValidationMessage>{'This field is required'}</FormValidationMessage>*/}

        <FormInput containerStyle={{ borderRadius: 40, borderWidth: 1, borderColor: "#26A69A", height: 50, width: SCREEN_WIDTH - 90, marginVertical: 10 }}
          placeholder="Question (Did you .. today?)" placeholderTextColor="#26A69A" inputStyle={{ marginLeft: 15, color: "white" }} autoCapitalize="none" autoCorrect={false}
          keyboardAppearance="light" returnKeyType="next" blurOnSubmit={false} />
      </View>
      <View style={styles.buttonContainer}>
        {this._renderButton('Discard', () => modalToggle(true))}
        {this._renderButton('Save', () => saveHabit(this.state))}
      </View>
    </View>
  );

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Modal isVisible={this.props.isModalVisible}>
          {this._renderModalContent(this.props.modalToggle, this.props.saveHabit)}
        </Modal>
      </View>
    );
  }
}
