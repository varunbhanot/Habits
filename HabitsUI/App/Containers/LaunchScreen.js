//Boilerplate
import React, { Component } from 'react'
import { ScrollView, Text, Image, View, ActivityIndicator } from 'react-native'
import Images from '../Themes/Images'
import { FloatingAction } from 'react-native-floating-action';



//Custom components 
import HabitsHeader from '../Components/HabitsHeader.js'
import TitleNav from '../Components/TitleNav.js'
import TouchableNav from '../Components/TouchableNav.js'
import DateHeader from '../Components/DateHeader.js'
import HabitCard from '../Components/HabitCard'
import AddModalScreen from '../Containers/AddModalScreen'

// Styles
import styles from './Styles/LaunchScreenStyles'
// Connect
import { connect } from 'react-redux'
import { fetchData, saveProgress } from '../Redux/HabitsRedux'
import { modalToggle } from '../Redux/ModalRedux'
/*TODO : move styles to style.js
move out render card to its own component
write logic for showing ActivityLoaderComponent
*/
class LaunchScreen extends Component {

  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.saveProgress = this.saveProgress.bind(this);
    this.modalToggle = this.modalToggle.bind(this);

  }


  componentWillMount() {
    this.props.fetchData()
  }


  saveProgress(value, id, deviceId ,operation) {
    this.props.saveProgress(value, id, deviceId ,operation)
  }

  modalToggle(currentState) {
    this.props.modalToggle(currentState)
  }

  render() {
    const actions = [{
      text: 'Add',
      name: 'Add',
      icon: require('../../images/add.png'),
      color: '#26A69A',
      position: 1
    }];
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <HabitsHeader centerComponent={<TitleNav title={'Habits'} />}
            rightComponent={<TitleNav title={''} />}
            leftComponent={<TitleNav title={''} />}
          />
          <DateHeader />
          {
            this.props.appData.data.habitsList ? (
              this.props.appData.data.habitsList.map((habit, index) => {
                return <HabitCard habit={habit} index={index} key={index} saveProgress={this.saveProgress} navigate={this.props.navigation} />
              }
              )
            ) : <ActivityIndicator size="large" color="#0000ff" />
          }
          <AddModalScreen />
        </ScrollView>

        <FloatingAction
          buttonColor={'#26A69A'}
          actions={actions}
          overrideWithAction
          onPressItem={() => this.modalToggle(false)} />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    appData: state.habits
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (uniqueId) => dispatch(fetchData(uniqueId)),
    saveProgress: (value, id, deviceId ,operation) => dispatch(saveProgress(value, id,deviceId, operation)),
    modalToggle: (currentState) => dispatch(modalToggle(currentState))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LaunchScreen)