import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Image, View, Dimensions } from 'react-native'
import HabitsHeader from '../Components/HabitsHeader.js'
import TitleNav from '../Components/TitleNav.js'
import TouchableNav from '../Components/TouchableNav.js'
import Images from '../Themes/Images'
import StatisticsCard from '../Components/StatisticsCard'
import StatisticsCalendar from '../Components/StatisticsCalendar'


import { connect } from 'react-redux'

import { fetchStatistics } from '../Redux/StatisticsRedux'

// Styles
import styles from './Styles/StatisticsScreenStyle'

class StatisticsScreen extends Component {

  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.onNavPress = this.onNavPress.bind(this);
  }

  componentWillMount() {
    this.props.fetchStatistics(this.props.navigation.state.params.id)
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
          <StatisticsCard text={'Total Times Done'} value={this.props.statsData.totalTimesDone} iconName={'check'} iconColor={'green'} />
          <StatisticsCard text={'Best Streak'} value={this.props.statsData.bestStreak} iconName={'trophy'} iconColor={'orange'} />
          <StatisticsCard text={'Current Streak'} value={this.props.statsData.currentStreak} iconName={'star'} iconColor={'yellow'} />
          <StatisticsCalendar streaks={{ '2018-02-17': { selected: true, startingDay: true, color: 'green' }, '2018-02-18': { selected: true, endingDay: true, color: 'green' } }} />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    statsData: state.stats.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStatistics: (habitId) => dispatch(fetchStatistics(habitId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsScreen)
