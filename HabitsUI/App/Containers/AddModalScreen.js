import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import AddModalContent from '../Components/AddModelContent'


// Add Actions - replace 'Your' with whatever your reducer is called :)
import {modalToggle} from '../Redux/ModalRedux'
import {saveHabit} from '../Redux/HabitSaveRedux'

// Styles
import styles from './Styles/AddModalScreenStyle'

class AddModalScreen extends Component {


  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.modalToggleFromModal = this.modalToggleFromModal.bind(this);
    this.saveHabit = this.saveHabit.bind(this);

  }

  modalToggleFromModal(currentState) {
    this.props.modalToggleFromModal(currentState)
  }
  
  saveHabit(habit) {
    this.props.saveHabit(habit)    
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          {
            this.props.modalData.isFetching ? null : <AddModalContent isModalVisible={this.props.modalData.isModalVisible} modalToggle={this.props.modalToggleFromModal} saveHabit={this.props.saveHabit}/>
          }
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    modalData: state.modal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    modalToggleFromModal : (currentState)=>dispatch(modalToggle(currentState)),
    saveHabit : (habit)=>dispatch(saveHabit(habit))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddModalScreen)
