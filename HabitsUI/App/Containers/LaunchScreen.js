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

// Styles
import styles from './Styles/LaunchScreenStyles'
// Connect
import { connect } from 'react-redux'
import { fetchData,saveProgress } from '../Redux/HabitsRedux'
/*TODO : move styles to style.js
move out render card to its own component
write logic for showing ActivityLoaderComponent
*/
class LaunchScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.saveProgress = this.saveProgress.bind(this);
  }

  componentWillMount() {
    this.props.fetchData()
  }


  saveProgress(value){
    this.props.saveProgress(value)
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <HabitsHeader centerComponent={<TitleNav title={'Habits'}/>} 
          rightComponent={<TitleNav title={''}/>} 
          leftComponent={<TitleNav title={''}/>}
           />          
          <DateHeader />
          {
            this.props.appData.data.length ? (                                                          
              this.props.appData.data.map((person, index) => {
                return <HabitCard person={person} index={index} key={index} saveProgress={this.saveProgress} navigate={this.props.navigation}/>
              }
            )              
            )  : <ActivityIndicator size="large" color="#0000ff" />
          }          
        </ScrollView>
        <FloatingAction buttonColor={'#26A69A'}/>
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
    fetchData: () => dispatch(fetchData()),
    saveProgress : (value) => dispatch(saveProgress(value))     
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LaunchScreen)