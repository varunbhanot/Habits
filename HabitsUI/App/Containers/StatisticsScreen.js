import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Image, View, Dimensions } from 'react-native'
import HabitsHeader from '../Components/HabitsHeader.js'
import TitleNav from '../Components/TitleNav.js'
import TouchableNav from '../Components/TouchableNav.js'
import Images from '../Themes/Images'
import StatisticsCard from '../Components/StatisticsCard'
import StatisticsCalendar from '../Components/StatisticsCalendar'


import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/StatisticsScreenStyle'

class StatisticsScreen extends Component {

  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.onNavPress = this.onNavPress.bind(this);
  }

  componentWillMount() {
    //call Api for specific habit
  }

  onNavPress(navigation) {
    navigation.goBack()
  }

  render() {


    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <HabitsHeader centerComponent={<TitleNav title={this.props.navigation.state.params.name.name} />}
          rightComponent={<TouchableNav text={'Done'} onPress={() => this.onNavPress(this.props.navigation)} />}
          leftComponent={<TitleNav title={''} />}
        />
        <ScrollView style={styles.container}>
        <StatisticsCard text={'Total Times Done'} value={'40'} iconName={'check'} iconColor={'green'}/>
        <StatisticsCard text={'Best Streak'} value={'10'} iconName={'trophy'} iconColor={'orange'}/>
        <StatisticsCard text={'Current Streak'} value={'5'} iconName={'star'} iconColor={'yellow'}/>
        <StatisticsCalendar streaks={{'2018-02-17': { selected: true, startingDay: true, color: 'green' },'2018-02-18': { selected: true, endingDay: true, color: 'green' }}}/>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsScreen)
