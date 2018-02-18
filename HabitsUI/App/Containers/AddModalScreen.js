import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import AddModalContent from '../Components/AddModelContent'


// Add Actions - replace 'Your' with whatever your reducer is called :)
import {modalToggle} from '../Redux/ModalRedux'

// Styles
import styles from './Styles/AddModalScreenStyle'

class AddModalScreen extends Component {


  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.modalToggleFromModal = this.modalToggleFromModal.bind(this);

  }

  modalToggleFromModal(currentState) {
    this.props.modalToggleFromModal(currentState)
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          {
            this.props.modalData.isFetching ? null : <AddModalContent isModalVisible={this.props.modalData.isModalVisible} modalToggle={this.props.modalToggleFromModal} />
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
    modalToggleFromModal : (currentState)=>dispatch(modalToggle(currentState))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddModalScreen)
